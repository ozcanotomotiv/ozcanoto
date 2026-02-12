"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Hero() {
  const videos = useMemo(
    () => [
      "/video/Baz%C4%B1%20g%C3%BCzel%20de%C4%9Fi%C5%9Fimler%20ya%C5%9Fand%C4%B1%20%F0%9F%92%AFAraca%20uygulanan%20i%C5%9Flemler%20%E2%98%91%EF%B8%8FBoyas%C4%B1z%20g%C3%B6%C3%A7%C3%BCk%20onar%C4%B1m%20i%C5%9Flemi%20%E2%98%91%EF%B8%8FAra%C3%A7%20ru.mp4",
      "/video/Harekete%20ge%C3%A7%20ve%20arac%C4%B1n%C4%B1%20bize%20getir%20-)%20Eyl%C3%BCl%20ay%C4%B1n%C4%B1n%20muhte%C5%9Fem%20fiyatlar%C4%B1%20ile%20sende%20randevunu%20olu%C5%9Ftu.mp4",
    ],
    []
  );

  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = async () => {
      try {
        await el.play();
      } catch {
        // autoplay may be blocked; muted should usually allow it
      }
    };

    el.currentTime = 0;
    void tryPlay();

    const id = window.setInterval(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0;
      void tryPlay();
    }, 5000);

    return () => window.clearInterval(id);
  }, [activeVideo]);

  const goPrev = () =>
    setActiveVideo((i) => (i - 1 + videos.length) % videos.length);
  const goNext = () => setActiveVideo((i) => (i + 1) % videos.length);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/images1.jpg"
          alt="Özcan Oto Servis"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 blur-0"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(243,156,18,0.26),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.07),transparent_45%),linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.75))]" />

      <Container className="relative py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="relative md:mt-20">
            <div className="absolute -inset-6 rounded-[var(--radius-md)] bg-[radial-gradient(circle_at_30%_30%,rgba(243,156,18,0.18),transparent_60%)]" />

            <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-white/5 ring-1 ring-white/10">
              <div className="relative aspect-[4/5] w-full md:aspect-[16/14]">
                <video
                  ref={videoRef}
                  key={videos[activeVideo]}
                  src={videos[activeVideo]}
                  muted
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
                  <span className="inline-block size-1.5 rounded-full bg-accent" />
                  Örnek Uygulama
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    Detaylı İşçilik
                  </div>
                  <div className="text-xs font-semibold text-white/80">
                    {activeVideo + 1} / {videos.length}
                  </div>
                </div>

                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    aria-label="Önceki video"
                    onClick={goPrev}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 p-2 text-white/90 backdrop-blur transition hover:bg-black/40"
                  >
                    <ChevronLeft className="size-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="Sonraki video"
                    onClick={goNext}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 p-2 text-white/90 backdrop-blur transition hover:bg-black/40"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              {siteConfig.city} Oto Servis • Boyasız Göçük Uzmanı
            </div>

            <h1 className="mt-4 font-[var(--font-heading)] text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Aracın İçin
              <span className="text-accent"> Hızlı</span>,
              <br className="hidden md:block" />
              <span className="text-white"> Güvenilir</span> Servis
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              Boyasız göçük, periyodik bakım ve mekanik onarımda hızlı randevu ve
              şeffaf bilgilendirme.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href={`tel:${siteConfig.phoneTel}`}
                size="lg"
                className="sm:w-auto"
              >
                Hemen Ara
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline"
                size="lg"
                className="sm:w-auto"
              >
                Online Randevu
              </Button>
            </div>

            <div className="mt-8 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-white/70">
                    Hızlı Ön Değerlendirme
                  </div>
                  <div className="mt-1 font-[var(--font-heading)] text-lg">
                    En Çok Talep Edilenler
                  </div>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 md:inline-flex">
                  Aynı Gün Dönüş
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {[
                  "Boyasız Göçük Onarımı",
                  "Periyodik Bakım",
                  "Mekanik Onarım",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-[var(--radius-md)] border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)]"
                  >
                    {t}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { k: "1999", v: "Kuruluş" },
                  { k: "Hızlı", v: "Randevu" },
                  { k: "Şeffaf", v: "Bilgi" },
                ].map((x) => (
                  <div
                    key={x.v}
                    className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-3"
                  >
                    <div className="font-[var(--font-heading)] text-white">
                      {x.k}
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/70">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
