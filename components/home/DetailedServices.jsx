import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Wrench, Paintbrush, Zap, Sparkles } from "lucide-react";

export default function DetailedServices() {
  const services = [
    {
      icon: Wrench,
      title: "Boyasız Göçük Onarımı",
      desc: "Aracınızın orijinal boyasına zarar vermeden göçük ve çizikleri onarıyoruz. Özel ekipman ve tekniklerle kısa sürede sonuç alıyoruz.",
      features: ["Orijinal boya korunur", "Hızlı işlem süresi", "Uygun fiyat"],
    },
    {
      icon: Paintbrush,
      title: "Kaporta & Boya",
      desc: "Profesyonel kaporta ve boya işlemleri ile aracınızı sıfır gibi yapıyoruz. Fırın boyama ve kaliteli malzeme garantisi.",
      features: ["Fırın boya sistemi", "Renk uyumu garantisi", "Detaylı işçilik"],
    },
    {
      icon: Zap,
      title: "Mekanik Onarım",
      desc: "Motor, şanzıman, fren ve süspansiyon sistemlerinde uzman kadromuzla hızlı ve güvenilir onarım hizmeti sunuyoruz.",
      features: ["Teşhis cihazı", "Orijinal yedek parça", "Garanti belgesi"],
    },
    {
      icon: Sparkles,
      title: "Detaylı Temizlik & Bakım",
      desc: "İç-dış detaylı temizlik, far parlatma, pasta-cila ve periyodik bakım hizmetleriyle aracınızı koruyoruz.",
      features: ["Profesyonel ekipman", "Kaliteli kimyasallar", "Uzun ömür"],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-transparent to-white/5">
      <Container className="py-16">
        <div className="text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl">
            Hizmetlerimiz Hakkında
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            Aracınızın her türlü ihtiyacı için profesyonel çözümler sunuyoruz.
            Kaliteli malzeme, uzman kadro ve müşteri memnuniyeti odaklı
            hizmet anlayışımızla yanınızdayız.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="!border-white/10 !bg-white/5 !text-white !ring-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-[var(--radius-md)] bg-accent/10 p-3 ring-1 ring-accent/20">
                  <service.icon className="size-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-[var(--font-heading)] text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{service.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-xs text-white/70"
                      >
                        <span className="inline-block size-1.5 rounded-full bg-accent" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
