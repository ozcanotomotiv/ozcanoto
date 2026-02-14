"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

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

export default function GoogleReviewsCarousel({ reviews }) {
  const pages = useMemo(() => {
    const safe = Array.isArray(reviews) ? reviews : [];
    const chunks = [];
    for (let i = 0; i < safe.length; i += 3) chunks.push(safe.slice(i, i + 3));
    return chunks;
  }, [reviews]);

  const [page, setPage] = useState(0);
  const pageCount = pages.length;
  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  if (!pageCount) return null;

  return (
    <div className="relative">
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={!canPrev}
          aria-label="Önceki yorumlar"
          className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          disabled={!canNext}
          aria-label="Sonraki yorumlar"
          className="grid size-10 place-items-center rounded-full border border-white/15 bg-black/50 text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-black/60 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((chunk, idx) => (
            <div key={idx} className="w-full shrink-0">
              <div className="grid gap-6 md:grid-cols-3">
                {chunk.map((r) => (
                  <div
                    key={`${r.time}-${r.author_name}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(20,27,38,0.55)] p-6 shadow-[0_18px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(243,156,18,0.40)] hover:bg-[rgba(20,27,38,0.70)]"
                  >
                    <div className="pointer-events-none absolute -left-1/2 -top-1/2 size-[200%] rotate-45 bg-gradient-to-r from-transparent via-[rgba(243,156,18,0.14)] to-transparent opacity-70 transition-transform duration-500 group-hover:translate-x-10" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(243,156,18,0.12),transparent_55%)] opacity-70" />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-white/10 bg-black/40 ring-1 ring-white/10">
                            {r.profile_photo_url ? (
                              <Image
                                src={r.profile_photo_url}
                                alt={r.author_name}
                                fill
                                sizes="44px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="text-xs font-bold text-white/80">
                                {getInitials(r.author_name)}
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{r.author_name}</div>
                            <div className="mt-1 text-xs text-white/60">
                              {r.relative_time_description}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <StarsRow value={r.rating} />
                        </div>
                      </div>

                      <div className="mt-4 line-clamp-5 text-sm leading-relaxed text-white/80">
                        {r.text}
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                        <div className="text-xs font-semibold text-white/60">Google</div>
                        <div className="text-xs font-semibold text-accent">{r.rating}/5</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {pageCount > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Sayfa ${i + 1}`}
              className={
                i === page
                  ? "h-2 w-6 rounded-full bg-accent"
                  : "h-2 w-2 rounded-full bg-white/25 hover:bg-white/40"
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
