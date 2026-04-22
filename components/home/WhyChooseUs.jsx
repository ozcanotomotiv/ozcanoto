import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Uzman Kadro",
      desc: "Sektörde 25+ yıl deneyime sahip, sertifikalı ustalarımızla hizmet veriyoruz.",
    },
    {
      title: "Kaliteli Malzeme",
      desc: "Sadece orijinal ve kaliteli yedek parça kullanıyoruz. Malzeme garantisi sunuyoruz.",
    },
    {
      title: "Şeffaf Fiyatlandırma",
      desc: "İşlem öncesi detaylı fiyat bilgisi veriyoruz. Gizli masraf yok, net fiyat.",
    },
    {
      title: "Hızlı Teslimat",
      desc: "Çoğu işlemi aynı gün teslim ediyoruz. Randevu sistemiyle bekleme yok.",
    },
    {
      title: "Garanti Belgesi",
      desc: "Tüm işlemlerimizde yazılı garanti belgesi veriyoruz. İşçilik garantimiz var.",
    },
    {
      title: "Müşteri Memnuniyeti",
      desc: "Binlerce mutlu müşteri ve 4.8/5 ortalama puan ile güvenilir hizmet.",
    },
  ];

  return (
    <section>
      <Container className="py-16">
        <div className="text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">
            Neden Özcan Otomotiv?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            Denizli'de 1999'dan beri güvenilir oto servis hizmeti sunuyoruz.
            İşte bizi tercih etmeniz için sebepler.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="!border-white/10 !bg-white/5 !text-white !ring-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{reason.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
