import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Shield, Clock, BadgeCheck, Headphones } from "lucide-react";

export default function ServiceBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Garanti Belgesi",
      desc: "Tüm hizmetlerimizde yazılı garanti belgesi veriyoruz. İşçilik ve malzeme garantisi.",
    },
    {
      icon: Clock,
      title: "Hızlı Teslimat",
      desc: "Çoğu işlemi aynı gün içinde tamamlıyoruz. Randevu sistemiyle bekleme süresi yok.",
    },
    {
      icon: BadgeCheck,
      title: "Orijinal Parça",
      desc: "Sadece orijinal ve kaliteli yedek parça kullanıyoruz. Kalite garantisi sunuyoruz.",
    },
    {
      icon: Headphones,
      title: "7/24 Destek",
      desc: "Randevu ve bilgi için her zaman ulaşabilirsiniz. Hızlı dönüş garantisi.",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/5">
      <Container className="py-12">
        <div className="text-center">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
            Hizmet Avantajlarımız
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/80">
            Müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="!border-white/10 !bg-black/40 !text-white !ring-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-accent/10 p-4 ring-1 ring-accent/20">
                  <benefit.icon className="size-6 text-accent" />
                </div>
                <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-white/70">{benefit.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
