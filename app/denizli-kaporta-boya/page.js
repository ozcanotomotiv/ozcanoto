import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Denizli Kaporta & Boya",
  description:
    "Denizli'de kaporta düzeltme ve boya işlemleri. Hasar onarımında temiz işçilik ve hızlı randevu için Özcan Otomotiv ile iletişime geçin.",
  alternates: {
    canonical: "/denizli-kaporta-boya",
  },
  openGraph: {
    title: "Denizli Kaporta & Boya | Özcan Otomotiv",
    description:
      "Denizli'de kaporta düzeltme ve boya işlemleri. Hasar onarımında temiz işçilik ve hızlı randevu.",
    url: "/denizli-kaporta-boya",
  },
};

export default function DenizliKaportaBoyaPage() {
  return (
    <div>
      <section>
        <Container className="py-14 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
              Denizli Kaporta &amp; Boya
            </h1>
            <p className="mt-4 text-white/80">
              Kaza, sürtme veya darbe sonrası kaporta düzeltme ve boya süreçlerini
              planlı şekilde yürütüyoruz. Amacımız aracınızın görünümünü toparlamak ve
              teslim öncesi kontrolleri eksiksiz tamamlamak.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button as={Link} href="/services" size="lg">
                Tüm Hizmetler
              </Button>
              <Button as={Link} href="/contact" variant="outline" size="lg">
                Fiyat / Randevu
              </Button>
            </div>

            <div className="mt-10 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
              <h2 className="font-[var(--font-heading)] text-xl">Hızlı İletişim</h2>
              <p className="mt-2 text-sm text-white/80">
                Hasarın fotoğraflarını gönderin, hızlıca dönüş yapalım.
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

            <div className="mt-10 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
              <h2 className="font-[var(--font-heading)] text-xl">Sık Sorulan Sorular</h2>
              <div className="mt-4 grid gap-4">
                <div>
                  <div className="font-semibold">Kaporta boya ne kadar sürer?</div>
                  <div className="mt-1 text-sm text-white/80">
                    Hasarın büyüklüğüne göre değişir. Küçük işlemler birkaç gün içinde,
                    geniş kapsamlı onarımlar ise planlamaya göre uzayabilir.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Parça değişimi gerekir mi?</div>
                  <div className="mt-1 text-sm text-white/80">
                    Darbenin durumuna göre düzeltme veya parça değişimi önerilebilir. En
                    doğru karar, yerinde kontrol veya fotoğrafla değerlendirme sonrası verilir.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Boya tonu tutar mı?</div>
                  <div className="mt-1 text-sm text-white/80">
                    Uygun hazırlık ve doğru tonlama ile hedef, göze batmayan uyumlu bir
                    sonuç almaktır. Teslim öncesi son kontroller yapılır.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6">
              <h2 className="font-[var(--font-heading)] text-xl">Konum</h2>
              <p className="mt-2 text-sm text-white/80">{siteConfig.address}</p>
              <div className="mt-4">
                <Button as="a" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" variant="outline">
                  Haritada Aç
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
