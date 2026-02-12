import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Car, Shield, Wrench } from "lucide-react";

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
    <div className="bg-muted">
      <Container className="py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-text shadow-sm ring-1 ring-black/5">
              <Shield size={14} className="text-accent" />
              Profesyonel Servis • Net Bilgilendirme
            </div>
            <h1 className="mt-4 font-[var(--font-heading)] text-3xl text-text md:text-5xl">
              Hizmetler
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-text-muted md:text-base">
              İhtiyacınıza uygun hizmeti seçin. Detayları inceleyin ve tek tıkla
              randevu alın.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-sm)] bg-black px-5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] hover:brightness-110"
          >
            Online Randevu
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Card className="group h-full p-0 overflow-hidden border border-white/10 bg-black text-white ring-1 ring-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10">
                    <s.Icon size={16} className="text-accent" />
                    {s.priceRange}
                  </div>
                </div>

                <div className="p-6">
                  <div className="font-[var(--font-heading)] text-xl leading-tight">
                    {s.title}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{s.shortDesc}</div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    Detayları Gör
                    <span className="text-accent transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
