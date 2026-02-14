import { siteConfig } from "@/lib/siteConfig";

async function getAggregateRating() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total");
  url.searchParams.set("language", "tr");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();
  if (!res.ok || data.status !== "OK") return null;

  const r = data.result || {};
  if (!r.rating || !r.user_ratings_total) return null;

  return {
    ratingValue: r.rating,
    reviewCount: r.user_ratings_total,
  };
}

export default async function LocalBusinessJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const aggregateRating = await getAggregateRating();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.shortName,
    url: baseUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "TR",
    },
    openingHours: ["Mo-Fr 08:30-19:00", "Sa 08:30-18:00", "Su Closed"],
  };

  if (aggregateRating) {
    jsonLd.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
