"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";

const team = [
  {
    name: "Fatih ÖZCAN",
    role: "Kurucu",
    badge: "⭐",
  },
  {
    name: "Yağmur ŞENTÜRK",
    role: "Genel Müdür",
    badge: "📋",
  },
  {
    name: "Ramazan CANIVAR",
    role: "Hasar & Sigorta Sorumlusu",
    badge: "🧾",
  },
  {
    name: "Fatih ORHAN",
    role: "Boyasız Göçük Uzmanı",
    badge: "🛠️",
  },
  {
    name: "Tayfun ÇELİK",
    role: "Oto Boya Ustası",
    badge: "🎨",
  },
  {
    name: "Süleyman KAVAL",
    role: "Oto Boya Ustası",
    badge: "🎨",
  },
  {
    name: "Hüseyin YEŞİLTAŞ",
    role: "Mekanik Ustası",
    badge: "🔧",
  },
  {
    name: "Batuhan SAY",
    role: "Mekanik Ustası",
    badge: "🔧",
  },
  {
    name: "Erhan YILDIRIM",
    role: "Kaporta Ustası",
    badge: "🚗",
  },
  {
    name: "Mahmut Kadir YAMUÇ",
    role: "Kaporta Ustası",
    badge: "🚗",
  },
  {
    name: "Volkan GÜLTAŞ",
    role: "Estetik Uzmanı",
    badge: "✨",
  },
  {
    name: "Halil ÇUBUK",
    role: "Elektrik & Elektronik Ustası",
    badge: "⚡",
  },
  {
    name: "Mehmet DUKAN",
    role: "Elektrik Ustası",
    badge: "⚡",
  },
  {
    name: "Kadriye ULUCAN",
    role: "Aşçı",
    badge: "🍽️",
  },
];

export default function TeamSlider() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.5);
  const rafRef = useRef(0);

  const slides = useMemo(() => team, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      positionRef.current -= speedRef.current;

      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (positionRef.current <= -half) positionRef.current += half;
        if (positionRef.current > 0) positionRef.current -= half;
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseMove = (e) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;

    if (pct > 0.5) {
      const s = 0.5 + (pct - 0.5) * 4;
      speedRef.current = s;
    } else {
      const s = -((0.5 - pct) * 4);
      speedRef.current = s;
    }
  };

  const onMouseLeave = () => {
    speedRef.current = 0.5;
  };

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(243,156,18,0.10),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_45%)]" />
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              Ekibimiz
            </div>
            <h2 className="mt-4 font-[var(--font-heading)] text-2xl md:text-3xl">
              İşini bilen bir ekip
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
              Servis sürecinde sizi bilgilendiren, temiz işçilik yapan ve teslimde
              kontrol eden bir ekip.
            </p>
          </div>
        </div>

        <div
          ref={wrapperRef}
          className="team-slider-wrapper mt-8 rounded-[var(--radius-md)] border border-white/10 bg-white/5 ring-1 ring-white/10"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div className="team-slider-overlay-left" />
          <div className="team-slider-overlay-right" />

          <div
            ref={trackRef}
            className="inline-flex will-change-transform"
          >
            {[0, 1].map((g) => (
              <div
                key={g}
                data-group={String(g)}
                className="inline-flex flex-nowrap gap-8 px-6 py-10"
              >
                {slides.map((x) => (
                  <div
                    key={`${g}-${x.name}`}
                    className="team-card group relative flex min-w-[320px] flex-none flex-col items-center gap-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-7 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-3 hover:scale-[1.04] hover:border-[rgba(243,156,18,0.45)]"
                  >
                    <div className="pointer-events-none absolute inset-[6px] rounded-[20px] bg-white/5 backdrop-blur" />
                    <div className="pointer-events-none absolute -left-1/2 -top-1/2 size-[200%] rotate-45 bg-gradient-to-r from-transparent via-[rgba(243,156,18,0.12)] to-transparent opacity-70 transition-transform duration-500 group-hover:translate-x-1/2" />

                    <div className="relative z-10 flex min-h-[180px] flex-col items-center justify-center text-center">
                      <div className="text-lg font-[var(--font-heading)]">{x.name}</div>
                      <div className="mt-3 inline-flex rounded-full border border-[rgba(243,156,18,0.30)] bg-[rgba(243,156,18,0.10)] px-4 py-2 text-sm font-semibold text-accent">
                        {x.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
