import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Car, Shield, Tag, Wrench } from "lucide-react";

const services = [
  {
    slug: "boyasiz-gocuk",
    title: "Boyasız Göçük Onarımı",
    shortDesc: "Dolu hasarı, kapı vurukları ve küçük göçüklerde boya koruyarak onarım.",
    priceRange: "Ücret: Araca göre",
    Icon: Car,
    image: "/images/images2.jpg",
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortDesc: "Yağ, filtre, fren ve genel kontrol ile güvenli sürüş.",
    priceRange: "Ücret: Pakete göre",
    Icon: BadgeCheck,
    image: "/images/images3.jpg",
  },
  {
    slug: "mekanik-onarim",
    title: "Mekanik Onarım",
    shortDesc: "Arıza tespiti, motor ve yürüyen aksam onarımları.",
    priceRange: "Ücret: Tespitten sonra",
    Icon: Wrench,
    image: "/images/images4.jpg",
  },
];

export const metadata = {
  title: "Hizmetler",
  description:
    "Özcan Oto Servis hizmetleri: boyasız göçük onarımı, periyodik bakım ve mekanik onarım.",
};

export default function ServicesPage() {
  return (
    <div>
      <Container className="py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              <Shield size={14} className="text-accent" />
              Profesyonel Servis • Net Bilgilendirme
            </div>
            <h1 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">
              Hizmetler
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
              İhtiyacınıza uygun hizmeti seçin. Detayları inceleyin ve tek tıkla
              randevu alın.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent px-5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)] hover:brightness-95"
          >
            Online Randevu
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[var(--shadow-soft)] ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(243,156,18,0.35)] hover:shadow-[0_18px_55px_rgba(243,156,18,0.12)]"
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
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
