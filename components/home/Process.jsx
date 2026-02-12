import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const steps = [
  {
    k: "01",
    title: "Hızlı Ön İnceleme",
    desc: "Telefonla bilgi alın veya randevu formunu doldurun. İhtiyaca göre aynı gün planlama yapalım.",
  },
  {
    k: "02",
    title: "Net Bilgilendirme",
    desc: "İşin kapsamını, süreyi ve maliyeti şeffaf biçimde paylaşırız. Sürpriz yok.",
  },
  {
    k: "03",
    title: "Ustalık + Temiz İşçilik",
    desc: "Boyasız göçük onarımı, bakım ve mekanik işlerde düzenli ve güvenli uygulama.",
  },
  {
    k: "04",
    title: "Teslim + Kontrol",
    desc: "Son kontrolleri yapar, aracı teslim ederiz. Gerekli önerileri paylaşırız.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,156,18,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_45%)]" />
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
              Sürecimiz
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
              Hızlı randevu, net iletişim ve düzenli işçilik. Baştan sona kontrollü
              ve şeffaf bir servis deneyimi.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((x) => (
            <Card
              key={x.k}
              className="h-full !border-white/10 !bg-black/50 !text-white !ring-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="font-[var(--font-heading)] text-sm text-white/70">
                  Adım
                </div>
                <div className="font-[var(--font-heading)] text-sm text-accent">
                  {x.k}
                </div>
              </div>
              <div className="mt-3 font-[var(--font-heading)] text-base">
                {x.title}
              </div>
              <div className="mt-2 text-sm text-white/70">{x.desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
