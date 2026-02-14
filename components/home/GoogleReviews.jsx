import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import GoogleReviewsCarousel from "@/components/home/GoogleReviewsCarousel";
import { manualGoogleReviews } from "@/data/manualGoogleReviews";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set(
      "fields",
      ["name", "url", "rating", "user_ratings_total", "reviews", "formatted_address"].join(",")
    );
    url.searchParams.set("language", "tr");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    if (!res.ok || data?.status !== "OK") return null;

    const r = data.result || {};
    return {
      name: r.name,
      url: r.url,
      rating: r.rating,
      user_ratings_total: r.user_ratings_total,
      reviews: Array.isArray(r.reviews) ? r.reviews : [],
      formatted_address: r.formatted_address,
    };
  } catch {
    return null;
  }
}

function StarsRow({ value }) {
  const rounded = Math.round((Number(value) || 0) * 2) / 2;
  const full = Math.floor(rounded);
  const half = rounded - full >= 0.5;

  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = !filled && half && i === full;

        return (
          <span key={i} className="relative">
            <Star
              size={16}
              className={filled ? "text-accent" : "text-white/20"}
              fill={filled ? "currentColor" : "none"}
            />
            {isHalf ? (
              <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star size={16} className="text-accent" fill="currentColor" />
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}

function getInitials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  const first = parts[0]?.[0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] : "";
  return (first + last).toUpperCase();
}

function normalizeReviews(raw = []) {
  const base = (Array.isArray(raw) ? raw : [])
    .map((r) => ({
      author_name: r.author_name,
      rating: Number(r.rating) || 0,
      relative_time_description: r.relative_time_description,
      text: typeof r.text === "string" ? r.text.trim() : "",
      profile_photo_url: r.profile_photo_url,
      time: r.time,
    }))
    .filter((r) => r.author_name);

  return base.filter((r) => r.rating >= 3 && r.text.length > 0);
}

function mergeWithManual({ apiReviews, manualReviews, limit }) {
  const safeApi = Array.isArray(apiReviews) ? apiReviews : [];
  const safeManual = Array.isArray(manualReviews) ? manualReviews : [];

  const keyOf = (r) => `${String(r.author_name || "").toLowerCase()}::${String(r.text || "").toLowerCase()}`;
  const seen = new Set();

  const merged = [];
  for (const r of safeApi) {
    const k = keyOf(r);
    if (seen.has(k)) continue;
    seen.add(k);
    merged.push(r);
  }
  for (const r of safeManual) {
    const k = keyOf(r);
    if (seen.has(k)) continue;
    seen.add(k);
    merged.push(r);
  }

  return merged.slice(0, limit);
}

export default async function GoogleReviews() {
  const data = await getGoogleReviews();

  if (!data?.rating || !data?.user_ratings_total) {
    return null;
  }

  const reviews = mergeWithManual({
    apiReviews: normalizeReviews(data.reviews || []),
    manualReviews: manualGoogleReviews,
    limit: 6,
  });
  if (!reviews.length) return null;
  const googleUrl = data.url || siteConfig.mapsUrl;

  return (
    <section>
      <Container className="py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              Google Yorumları
            </div>
            <h2 className="mt-4 font-[var(--font-heading)] text-2xl md:text-3xl">
              Müşterilerimiz ne diyor?
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
              <div className="inline-flex items-center gap-2">
                <StarsRow value={data.rating} />
                <span className="font-semibold text-white">{data.rating}/5</span>
              </div>
              <div className="text-white/70">({data.user_ratings_total} yorum)</div>
              {data.formatted_address ? (
                <div className="text-white/60">{data.formatted_address}</div>
              ) : null}
            </div>
          </div>

          <a
            href={googleUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-white/20 bg-white/5 px-4 text-sm font-semibold text-white hover:bg-white/10"
          >
            Google'da Gör
            <ExternalLink size={16} className="text-white/70" />
          </a>
        </div>

        <div className="mt-8">
          <GoogleReviewsCarousel reviews={reviews} />
        </div>
      </Container>
    </section>
  );
}
