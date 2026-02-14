import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Link from "next/link";

const items = [
  {
    slug: "boyasiz-gocuk",
    title: "Boyasız Göçük Onarımı",
    desc: "Dolu hasarı ve kapı vuruklarında hızlı, temiz işçilik.",
  },
  {
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    desc: "Araç sağlığını koruyan bakım ve kontrol planı.",
  },
  {
    slug: "mekanik-onarim",
    title: "Mekanik Onarım",
    desc: "Arıza tespiti, tamir ve güvenli sürüş için çözüm.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(243,156,18,0.14),transparent_55%),radial-gradient(circle_at_85%_0%,rgba(255,255,255,0.07),transparent_45%)]" />
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
              Hizmetler
            </h2>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              En çok talep edilen hizmetlerimiz — detaylar için tıklayın.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            Tüm Hizmetler
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {items.map((x) => (
            <Link key={x.slug} href={`/services?open=${x.slug}`}>
              <Card className="group h-full p-0 overflow-hidden !border-white/10 !bg-black/50 !text-white !ring-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                <div className="h-1.5 bg-gradient-to-r from-accent via-amber-400 to-accent" />
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/80">
                    Profesyonel Servis
                  </div>
                  <div className="mt-3 font-[var(--font-heading)] text-lg">
                    {x.title}
                  </div>
                  <div className="mt-2 text-sm text-white/70">{x.desc}</div>
                  <div className="mt-6 text-sm font-semibold text-white">
                    Detayları Gör <span className="text-accent">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
