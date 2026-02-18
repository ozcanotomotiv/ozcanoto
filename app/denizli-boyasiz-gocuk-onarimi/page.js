import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Denizli Boyasız Göçük Onarımı (PDR)",
  description:
    "Denizli'de boyasız göçük onarımı (PDR), dolu hasarı ve kapı vuruklarında hızlı çözüm. Özcan Otomotiv ile iletişime geçin.",
  alternates: {
    canonical: "/denizli-boyasiz-gocuk-onarimi",
  },
  openGraph: {
    title: "Denizli Boyasız Göçük Onarımı (PDR) | Özcan Otomotiv",
    description:
      "Denizli'de boyasız göçük onarımı (PDR), dolu hasarı ve kapı vuruklarında hızlı çözüm. Hemen randevu alın.",
    url: "/denizli-boyasiz-gocuk-onarimi",
  },
};

export default function DenizliBoyasizGocukOnarimiPage() {
  return (
    <div>
      <section>
        <Container className="py-14 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
              Denizli Boyasız Göçük Onarımı (PDR)
            </h1>
            <p className="mt-4 text-white/80">
              Kaporta boyasına zarar vermeden, özel ekipman ve tekniklerle göçükleri
              düzeltiyoruz. Dolu hasarı, kapı vurukları ve küçük göçüklerde hızlı
              çözüm sunuyoruz.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button as={Link} href="/services" size="lg">
                Hizmetleri İncele
              </Button>
              <Button as={Link} href="/contact" variant="outline" size="lg">
                Randevu Al
              </Button>
            </div>

            <div className="mt-10 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
              <h2 className="font-[var(--font-heading)] text-xl">
                Hızlı İletişim
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Fotoğraf gönderebilir veya doğrudan arayabilirsiniz.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={`tel:${siteConfig.phoneTel}`}>
                  Hemen Ara
                </Button>
                <Button as="a" href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer" variant="outline">
                  WhatsApp
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6">
              <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
                <h2 className="font-[var(--font-heading)] text-xl">Sık Sorulan Sorular</h2>
                <div className="mt-4 grid gap-4">
                  <div>
                    <div className="font-semibold">Boyasız göçük onarımı nedir?</div>
                    <div className="mt-1 text-sm text-white/80">
                      Kaporta boyasına işlem yapmadan, göçüğü içten/dıştan özel aletlerle
                      düzelterek orijinal boyayı koruyan onarım yöntemidir.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Dolu hasarı PDR ile olur mu?</div>
                    <div className="mt-1 text-sm text-white/80">
                      Hasarın konumuna ve boya durumuna göre çoğu dolu hasarı PDR ile
                      toparlanabilir. Net bilgi için fotoğrafla hızlı değerlendirme yapılır.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Ne kadar sürer?</div>
                    <div className="mt-1 text-sm text-white/80">
                      Göçüğün sayısı ve büyüklüğüne göre değişir. Bazı işlemler aynı gün,
                      dolu hasarı gibi yoğun işlerde ise birkaç gün sürebilir.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Fiyat nasıl belirlenir?</div>
                    <div className="mt-1 text-sm text-white/80">
                      Panel sayısı, göçüğün derinliği ve erişim zorluğuna göre belirlenir.
                      Fotoğraf veya yerinde kontrol ile netleşir.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
                <h2 className="font-[var(--font-heading)] text-xl">Neden Özcan Otomotiv?</h2>
                <ul className="mt-4 grid gap-2 text-sm text-white/80">
                  <li>1999'dan beri tecrübe</li>
                  <li>Orijinal boyayı koruyan onarım yaklaşımı</li>
                  <li>Denizli Pamukkale'de kolay ulaşım</li>
                  <li>Telefon/WhatsApp ile hızlı randevu</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
