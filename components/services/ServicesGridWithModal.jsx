"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Car,
  ClipboardCheck,
  Paintbrush,
  Sparkles,
  Tag,
  Truck,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const services = [
  {
    slug: "boyasiz-gocuk",
    title: "Boyasız Göçük Onarımı",
    shortDesc: "Dolu hasarı, kapı vurukları ve küçük göçüklerde boya koruyarak onarım.",
    fullDesc:
      "Kaporta boyasına zarar vermeden, özel ekipman ve tekniklerle göçükleri düzeltiriz. Dolu hasarı, kapı vurukları ve küçük göçüklerde hızlı çözüm sunarız.",
    priceRange: "Ücret: Araca göre",
    Icon: Car,
    image: "/images/images2.jpg",
  },
  {
    slug: "celik-rutus",
    title: "Çelik Rötuş",
    shortDesc:
      "Küçük çizik ve lokal kusurlarda hızlı rötuş çözümleriyle temiz görünüm.",
    fullDesc:
      "Küçük çizikler, taş izleri ve lokal kusurlarda hızlı rötuş çözümleri sunarız. Amaç, aracın görünümünü temizleyip gözle görülen kusurları minimuma indirmektir.",
    priceRange: "Ücret: İşe göre",
    Icon: Tag,
    image: "/images/images1.jpg",
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortDesc: "Yağ, filtre, fren ve genel kontrol ile güvenli sürüş.",
    fullDesc:
      "Yağ ve filtre değişimi, fren kontrolleri ve genel muayene ile aracınızın performansını koruruz. Güvenli sürüş için düzenli bakım planları sunarız.",
    priceRange: "Ücret: Pakete göre",
    Icon: BadgeCheck,
    image: "/images/images3.jpg",
  },
  {
    slug: "mekanik-onarim",
    title: "Mekanik Onarım",
    shortDesc:
      "Motor arızaları, alt takım, yürüyen aksam ve kapsamlı işçilik çözümleri.",
    fullDesc:
      "Periyodik bakımın dışında; motor arızaları, alt takım, yürüyen aksam ve işçilik gerektiren mekanik ihtiyaçlarınız için doğru teşhis ve sağlam işçilikle hizmet veririz.",
    priceRange: "Ücret: Tespitten sonra",
    Icon: Wrench,
    image: "/images/images4.jpg",
  },
  {
    slug: "kaporta-boya",
    title: "Kaporta & Boya",
    shortDesc:
      "Sigorta hasarı ve ücretli işlemler: kaporta düzeltme, boya ve onarım süreçleri.",
    fullDesc:
      "Kaporta düzeltme, boya işlemleri ve hasar onarımında hem ücretli hem de sigorta üzerinden süreç yönetimi sunarız. Hasarı inceler, işlemleri planlar ve teslim öncesi kontrolleri tamamlarız.",
    priceRange: "Ücret: Hasara göre",
    Icon: Paintbrush,
    image: "/images/images2.jpg",
  },
  {
    slug: "elektrik-elektronik",
    title: "Elektrik & Elektronik",
    shortDesc:
      "Arıza tespiti, elektrik sistemleri, sensör/aksam kontrolleri ve onarımlar.",
    fullDesc:
      "Elektrik sistemleri ve elektronik arızalarda arıza tespiti, sensör/aksam kontrolleri ve onarım süreçlerini yönetiriz. En doğru çözüm için ölçüm ve testlerle ilerleriz.",
    priceRange: "Ücret: Tespitten sonra",
    Icon: Zap,
    image: "/images/images3.jpg",
  },
  {
    slug: "estetik",
    title: "Estetik (Pasta Cila / Seramik / Kuaför)",
    shortDesc:
      "Pasta-cila, boya koruma, seramik kaplama ve detaylı iç/dış temizlik paketleri.",
    fullDesc:
      "Estetik bakım paketlerimiz; pasta-cila, boya koruma, seramik kaplama ve detaylı iç/dış kuaför hizmetlerini kapsar. Aracınızın parlaklığını ve korumasını artırmak için doğru ürün ve uygulama seçimi yaparız.",
    priceRange: "Ücret: Pakete göre",
    Icon: Sparkles,
    image: "/images/images4.jpg",
  },
  {
    slug: "vale-hizmeti",
    title: "Vale Hizmeti (Evden alıp teslim)",
    shortDesc:
      "Aracınızı evden alıyor, işlemler sonrası güvenle teslim ediyoruz.",
    fullDesc:
      "Zamanınız kısıtlıysa aracı evinizden/iş yerinizden teslim alıp işlemler tamamlandığında tekrar teslim ederiz. Süreç boyunca bilgilendirme yaparız.",
    priceRange: "Ücret: Mesafeye göre",
    Icon: Truck,
    image: "/images/images1.jpg",
  },
  {
    slug: "vize-hazirligi",
    title: "Vize Hazırlığı",
    shortDesc:
      "Aracınızı tamamen bize bırakın: kontrol, eksiklerin tamamlanması ve hazırlık.",
    fullDesc:
      "Aracınızı tamamen bize bırakın. Kontrolleri yapalım, gerekli hazırlıkları ve eksiklerin giderilmesini planlayalım. Hazır olduğunda sizi bilgilendirip teslim edelim.",
    priceRange: "Ücret: Araca göre",
    Icon: ClipboardCheck,
    image: "/images/images2.jpg",
  },
];

export default function ServicesGridWithModal() {
  const [activeSlug, setActiveSlug] = useState("");

  const activeService = useMemo(
    () => services.find((s) => s.slug === activeSlug) || null,
    [activeSlug, services]
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActiveSlug("");
    }

    if (!activeSlug) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlug]);

  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActiveSlug(s.slug)}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left shadow-[var(--shadow-soft)] ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(243,156,18,0.35)] hover:shadow-[0_18px_55px_rgba(243,156,18,0.12)]"
          >
            <div className="relative aspect-square overflow-hidden bg-[linear-gradient(135deg,#0f131a,#141b26)]">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute right-3 top-3 grid size-10 place-items-center rounded-lg border border-[rgba(243,156,18,0.18)] bg-black/50 text-white/90 backdrop-blur transition-all duration-300 group-hover:scale-[1.04] group-hover:border-[rgba(243,156,18,0.35)] group-hover:bg-[rgba(243,156,18,0.10)]">
                <s.Icon size={18} className="text-accent" />
              </div>
            </div>

            <div className="p-4">
              <div className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                {s.title}
              </div>
              <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/55">
                {s.shortDesc}
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <Tag className="size-3.5" />
                  {s.priceRange}
                </div>
                <div className="grid size-7 place-items-center rounded-md bg-[rgba(243,156,18,0.10)] text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-accent group-hover:text-brand">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeService ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setActiveSlug("")}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[rgba(20,27,38,0.85)] shadow-[0_18px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="relative grid gap-5 p-6 md:grid-cols-[1fr_1.1fr] md:p-7">
              <button
                type="button"
                aria-label="Kapat"
                onClick={() => setActiveSlug("")}
                className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/10 bg-black/30 text-white/80 hover:bg-black/40"
              >
                <X size={18} />
              </button>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
                  {activeService.priceRange}
                </div>
                <div className="mt-3 flex items-start gap-3">
                  <div className="mt-0.5 grid size-10 flex-none place-items-center rounded-xl border border-[rgba(243,156,18,0.18)] bg-[rgba(243,156,18,0.10)] text-white/90 ring-1 ring-[rgba(243,156,18,0.18)]">
                    <activeService.Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-[var(--font-heading)] text-2xl leading-tight text-white">
                      {activeService.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-white/75">
                      {activeService.fullDesc || activeService.shortDesc}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-[var(--radius-sm)] bg-accent px-5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)] hover:brightness-95"
                  >
                    Randevu Al
                  </Link>
                  <Link
                    href={`/services/${activeService.slug}`}
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-[var(--radius-sm)] border border-white/20 bg-transparent px-5 text-sm font-semibold text-white hover:border-white/30 hover:bg-white/10"
                  >
                    Detay Sayfası
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
