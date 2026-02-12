"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const team = [
  {
    name: "Usta Teknisyen",
    role: "Mekanik Onarım",
    src: "/images/images3.jpg",
  },
  {
    name: "Göçük Uzmanı",
    role: "Boyasız Onarım",
    src: "/images/images1.jpg",
  },
  {
    name: "Bakım Sorumlusu",
    role: "Periyodik Bakım",
    src: "/images/images2.jpg",
  },
  {
    name: "Servis Danışmanı",
    role: "Randevu & Teslim",
    src: "/images/images4.jpg",
  },
];

export default function TeamSlider() {
  const [touchPaused, setTouchPaused] = useState(false);

  const slides = useMemo(() => team, []);

  // On touch devices, pause while touching to allow reading
  useEffect(() => {
    if (!touchPaused) return;
    const t = window.setTimeout(() => setTouchPaused(false), 2000);
    return () => window.clearTimeout(t);
  }, [touchPaused]);

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
          className={
            "marquee mt-8 rounded-[var(--radius-md)] border border-white/10 bg-white/5 ring-1 ring-white/10" +
            (touchPaused ? "" : "")
          }
          onTouchStart={() => setTouchPaused(true)}
        >
          <div
            className="marquee-track"
            style={{ animationPlayState: touchPaused ? "paused" : "running" }}
          >
            {[0, 1].map((g) => (
              <div key={g} className="marquee-group items-center gap-6 px-4 py-6">
                {slides.map((x) => (
                  <div
                    key={`${g}-${x.name}`}
                    className="mx-2 inline-flex min-w-[280px] items-center gap-4 rounded-[var(--radius-md)] border border-white/10 bg-black/45 px-5 py-4 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10"
                  >
                    <div className="relative size-14 overflow-hidden rounded-full ring-1 ring-white/10">
                      <Image
                        src={x.src}
                        alt={x.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-[var(--font-heading)] text-base">
                        {x.name}
                      </div>
                      <div className="mt-0.5 truncate text-sm text-white/70">
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
