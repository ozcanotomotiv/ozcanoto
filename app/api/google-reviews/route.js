import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/siteConfig";

export const runtime = "nodejs";
export const revalidate = 3600;

async function fetchPlaceDetails({ apiKey, placeId }) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set(
    "fields",
    [
      "name",
      "url",
      "rating",
      "user_ratings_total",
      "reviews",
      "formatted_address",
      "international_phone_number",
    ].join(",")
  );
  url.searchParams.set("language", "tr");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url, { next: { revalidate } });
  const data = await res.json();
  return { res, data };
}

async function resolvePlaceIdFromText({ apiKey, input }) {
  const url = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  url.searchParams.set("input", input);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id");
  url.searchParams.set("language", "tr");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url, { next: { revalidate } });
  const data = await res.json();

  const placeId = data?.candidates?.[0]?.place_id;
  return {
    ok: res.ok && data?.status === "OK" && Boolean(placeId),
    placeId,
    status: data?.status,
    error_message: data?.error_message,
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const envPlaceId = process.env.GOOGLE_PLACE_ID;
  const queryText =
    process.env.GOOGLE_PLACE_QUERY || `${siteConfig.name} ${siteConfig.address}`;

  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: "Missing env vars",
        missing: {
          GOOGLE_MAPS_API_KEY: !apiKey,
          GOOGLE_PLACE_ID: !envPlaceId,
        },
      },
      { status: 500 }
    );
  }

  try {
    let chosenPlaceId = envPlaceId || null;
    let chosenDetails = null;
    let chosenMeta = {
      used_place_id: null,
      source: null,
      env_place_id: envPlaceId || null,
      findplace_query: queryText,
      findplace_place_id: null,
    };

    // 1) Try env Place ID first (if present)
    if (chosenPlaceId) {
      const { res, data } = await fetchPlaceDetails({ apiKey, placeId: chosenPlaceId });
      if (res.ok && data?.status === "OK") {
        chosenDetails = data;
        chosenMeta.used_place_id = chosenPlaceId;
        chosenMeta.source = "env";
      }
    }

    // 2) Resolve via Find Place (always attempts as a safety net)
    const resolved = await resolvePlaceIdFromText({ apiKey, input: queryText });
    if (resolved.ok && resolved.placeId) {
      chosenMeta.findplace_place_id = resolved.placeId;

      // If env was missing OR env returned too few ratings, prefer the higher total.
      const envTotal =
        chosenDetails?.result?.user_ratings_total != null
          ? Number(chosenDetails.result.user_ratings_total)
          : -1;

      const shouldCompare = envTotal >= 0 && envTotal < 10;
      const shouldUseFindPlace = !chosenDetails || shouldCompare;

      if (shouldUseFindPlace) {
        const { res: fpRes, data: fpData } = await fetchPlaceDetails({
          apiKey,
          placeId: resolved.placeId,
        });

        if (fpRes.ok && fpData?.status === "OK") {
          const fpTotal =
            fpData?.result?.user_ratings_total != null
              ? Number(fpData.result.user_ratings_total)
              : -1;

          if (!chosenDetails || fpTotal > envTotal) {
            chosenDetails = fpData;
            chosenPlaceId = resolved.placeId;
            chosenMeta.used_place_id = chosenPlaceId;
            chosenMeta.source = "findplace";
          }
        }
      }
    }

    if (!chosenDetails) {
      return NextResponse.json(
        {
          ok: false,
          error: "Could not resolve place details",
          diagnostics: chosenMeta,
        },
        { status: 502 }
      );
    }

    const result = chosenDetails.result || {};

    return NextResponse.json({
      ok: true,
      diagnostics: chosenMeta,
      place: {
        name: result.name,
        url: result.url,
        formatted_address: result.formatted_address,
        international_phone_number: result.international_phone_number,
      },
      rating: result.rating,
      user_ratings_total: result.user_ratings_total,
      reviews: (result.reviews || []).map((r) => ({
        author_name: r.author_name,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
        text: r.text,
        profile_photo_url: r.profile_photo_url,
        time: r.time,
      })),
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: "Fetch failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 502 }
    );
  }
}
