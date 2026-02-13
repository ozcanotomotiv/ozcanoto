import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

const serviceBySlug = {
  "boyasiz-gocuk": {
    title: "Boyasız Göçük Onarımı",
    fullDesc:
      "Kaporta boyasına zarar vermeden, özel ekipman ve tekniklerle göçükleri düzeltiriz. Dolu hasarı, kapı vurukları ve küçük göçüklerde hızlı çözüm sunarız.",
  },
  "celik-rutus": {
    title: "Çelik Rötuş",
    fullDesc:
      "Küçük çizikler, taş izleri ve lokal kusurlarda hızlı rötuş çözümleri sunarız. Amaç, aracın görünümünü temizleyip gözle görülen kusurları minimuma indirmektir.",
  },
  "periyodik-bakim": {
    title: "Periyodik Bakım",
    fullDesc:
      "Yağ ve filtre değişimi, fren kontrolleri ve genel muayene ile aracınızın performansını koruruz. Güvenli sürüş için düzenli bakım planları sunarız.",
  },
  "mekanik-onarim": {
    title: "Mekanik Onarım",
    fullDesc:
      "Periyodik bakımın dışında; motor arızaları, alt takım, yürüyen aksam ve işçilik gerektiren mekanik ihtiyaçlarınız için doğru teşhis ve sağlam işçilikle hizmet veririz.",
  },
  "kaporta-boya": {
    title: "Kaporta & Boya",
    fullDesc:
      "Kaporta düzeltme, boya işlemleri ve hasar onarımında hem ücretli hem de sigorta üzerinden süreç yönetimi sunarız. Hasarı inceler, işlemleri planlar ve teslim öncesi kontrolleri tamamlarız.",
  },
  "elektrik-elektronik": {
    title: "Elektrik & Elektronik",
    fullDesc:
      "Elektrik sistemleri ve elektronik arızalarda arıza tespiti, sensör/aksam kontrolleri ve onarım süreçlerini yönetiriz. En doğru çözüm için ölçüm ve testlerle ilerleriz.",
  },
  "estetik": {
    title: "Estetik (Pasta Cila / Seramik / Kuaför)",
    fullDesc:
      "Estetik bakım paketlerimiz; pasta-cila, boya koruma, seramik kaplama ve detaylı iç/dış kuaför hizmetlerini kapsar. Aracınızın parlaklığını ve korumasını artırmak için doğru ürün ve uygulama seçimi yaparız.",
  },
  "vale-hizmeti": {
    title: "Vale Hizmeti (Evden alıp teslim)",
    fullDesc:
      "Zamanınız kısıtlıysa aracı evinizden/iş yerinizden teslim alıp işlemler tamamlandığında tekrar teslim ederiz. Süreç boyunca bilgilendirme yaparız.",
  },
  "vize-hazirligi": {
    title: "Vize Hazırlığı",
    fullDesc:
      "Aracınızı tamamen bize bırakın. Kontrolleri yapalım, gerekli hazırlıkları ve eksiklerin giderilmesini planlayalım. Hazır olduğunda sizi bilgilendirip teslim edelim.",
  },
};

export async function generateMetadata({ params }) {
  const service = serviceBySlug[params.slug];
  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  return {
    title: service.title,
    description: `${service.title} | Özcan Oto Servis`,
  };
}

export default async function ServiceDetailPage({ params }) {
  const service = serviceBySlug[params.slug];

  if (!service) {
    return (
      <Container className="py-14">
        <h1 className="font-[var(--font-heading)] text-2xl">
          Hizmet bulunamadı
        </h1>
      </Container>
    );
  }

  return (
    <div>
      <Container className="py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-4 text-sm text-white/80 md:text-base">
              {service.fullDesc}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href={`tel:${siteConfig.phoneTel}`} size="lg">
                Hemen Ara
              </Button>
              <Button as="a" href="/contact" variant="secondary" size="lg">
                Randevu Al
              </Button>
            </div>
          </div>

          <Card className="md:sticky md:top-20 !border-white/10 !bg-white/5 !text-white !ring-white/10">
            <div className="font-[var(--font-heading)] text-lg">Hızlı Bilgi</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              <div>
                <span className="font-semibold text-white">Konum:</span> {siteConfig.city}
              </div>
              <div>
                <span className="font-semibold text-white">Süre:</span> İşe göre
              </div>
              <div>
                <span className="font-semibold text-white">Ücret:</span> Araca göre
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
