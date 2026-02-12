import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const items = [
  {
    title: "Boyasız Göçük",
    desc: "Dolu hasarı, kapı vurukları ve lokal göçüklerde boya korunarak onarım.",
  },
  {
    title: "Periyodik Bakım",
    desc: "Yağ/filtre, genel kontrol ve güvenlik kontrolleriyle aracınızı koruyun.",
  },
  {
    title: "Mekanik Onarım",
    desc: "Arıza tespiti, tamir ve güvenli sürüş için hızlı çözüm.",
  },
  {
    title: "Ön Kontrol",
    desc: "Kısa bir inceleme ile kapsam/süre planlaması ve net bilgilendirme.",
  },
];

export default function Coverage() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(243,156,18,0.14),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.07),transparent_50%)]" />
      <Container className="py-14">
        <div>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
            Neler Yapıyoruz?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
            En çok talep edilen hizmetlerimizin yanında, aracınız için doğru çözümü
            hızlıca planlıyoruz.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((x) => (
            <Card
              key={x.title}
              className="!border-white/10 !bg-black/50 !text-white !ring-white/10"
            >
              <div className="font-[var(--font-heading)] text-base">
                {x.title}
              </div>
              <div className="mt-2 text-sm text-white/70">{x.desc}</div>
              <div className="mt-4 text-sm font-semibold text-white">
                Detaylar için randevu alın
                <span className="text-accent"> →</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
