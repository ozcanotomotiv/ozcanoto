import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Çerez Politikası",
  description:
    "Özcan Oto Servis web sitesinde çerezlerin nasıl kullanıldığına dair bilgilendirme.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-muted">
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl text-text md:text-4xl">
            Çerez Politikası
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-text-muted md:text-base">
            Bu sayfa bilgilendirme amaçlıdır. Çerez tercihleri tarayıcı
            ayarlarınızdan yönetilebilir.
          </p>
        </div>

        <div className="mt-8 grid gap-4">
          <Card className="bg-surface">
            <div className="font-[var(--font-heading)] text-base text-text">
              Çerez (Cookie) Nedir?
            </div>
            <div className="mt-2 text-sm text-text-muted">
              Çerezler, web sitesi ziyaretiniz sırasında tarayıcınızda saklanan
              küçük metin dosyalarıdır. Site deneyimini iyileştirmek, temel
              fonksiyonları sağlamak ve bazı durumlarda istatistiksel ölçüm yapmak
              için kullanılabilir.
            </div>
          </Card>

          <Card className="bg-surface">
            <div className="font-[var(--font-heading)] text-base text-text">
              Hangi Tür Çerezler Kullanılabilir?
            </div>
            <div className="mt-2 grid gap-2 text-sm text-text-muted">
              <div>
                <span className="font-semibold text-text">Zorunlu:</span> Sitenin
                düzgün çalışması için gerekli olabilir.
              </div>
              <div>
                <span className="font-semibold text-text">Analitik:</span> Site
                kullanımını anonim şekilde anlamaya yardımcı olabilir.
              </div>
              <div>
                <span className="font-semibold text-text">Fonksiyonel:</span>
                Tercihlerinizi (ör. dil) hatırlayabilir.
              </div>
            </div>
          </Card>

          <Card className="bg-surface">
            <div className="font-[var(--font-heading)] text-base text-text">
              Çerezleri Nasıl Kontrol Edebilirim?
            </div>
            <div className="mt-2 text-sm text-text-muted">
              Çerezleri tarayıcı ayarlarınızdan silebilir veya engelleyebilirsiniz.
              Çerezleri devre dışı bırakmanız bazı özelliklerin çalışmasını
              etkileyebilir.
            </div>
          </Card>

          <Card className="bg-surface">
            <div className="font-[var(--font-heading)] text-base text-text">
              İletişim
            </div>
            <div className="mt-2 text-sm text-text-muted">
              Çerez politikasıyla ilgili sorularınız için bizimle iletişime
              geçebilirsiniz.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
