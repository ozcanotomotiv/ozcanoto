import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";

export const metadata = {
  title: "Sıkça Sorulan Sorular (SSS)",
  description:
    "Özcan Oto Servis için sık sorulan sorular: randevu, boyasız göçük, bakım ve süreç hakkında bilgiler.",
};

const faqs = [
  {
    q: "Akü değişimi ne kadar sürer ve nasıl yapılır?",
    a: "Akü değişimi çoğu araçta 10-30 dakika içinde tamamlanır. Uygun amper (Ah) ve soğuk marş (CCA) değerinde akü seçilir, kutup başları temizlenir, montaj sonrası şarj/voltaj kontrolü yapılır.",
  },
  {
    q: "Aracımın periyodik bakımını ne sıklıkla yaptırmalıyım?",
    a: "Genellikle 10.000-15.000 km veya yılda 1 kez önerilir. Ancak sürüş şartları (şehir içi kısa mesafe, yoğun trafik, yüksek sıcaklık) bakım aralığını kısaltabilir. En doğru aralık için üretici önerisi ve araç kullanımınıza göre planlama yaparız.",
  },
  {
    q: "Aracımın yağ değişimini ne zaman yaptırmalıyım?",
    a: "Motor yağı, kullanım tipine göre 10.000-15.000 km aralığında veya yılda 1 kez değişmelidir. Yağ/filtre birlikte değiştirilmesi motor sağlığı için kritiktir.",
  },
  {
    q: "Fren balatalarımın değişmesi gerektiğini nasıl anlarım?",
    a: "Fren yaparken ses (metal sürtme), pedal hissinde değişim, fren mesafesinde uzama veya gösterge uyarısı balata aşınmasına işaret edebilir. Güvenlik için kontrolü geciktirmeyin.",
  },
  {
    q: "Klima bakımı neden önemlidir ve ne zaman yapılmalıdır?",
    a: "Klima performansı, sürüş konforu ve cam buğusu için önemlidir. Genellikle yılda 1 kez kontrol önerilir. Koku, zayıf soğutma veya ses varsa bakım zamanı gelmiş olabilir.",
  },
  {
    q: "Randevu almak zorunlu mu?",
    a: "Yoğunluk durumuna göre değişir. Hızlı hizmet için randevu önerilir. Acil durumlarda telefonla arayarak aynı gün uygunluk sorabilirsiniz.",
  },
  {
    q: "Boyasız göçük onarımı hangi hasarlarda yapılır?",
    a: "Dolu hasarı, kapı vurukları ve küçük/orta göçüklerde, boya çatlağı yoksa çoğu zaman boyasız onarım mümkündür. Kesin değerlendirme için fotoğraf veya yerinde kontrol gerekir.",
  },
  {
    q: "Onarım ne kadar sürer?",
    a: "İşin türüne göre değişir. Bazı işlemler aynı gün tamamlanabilir. Parça bekleme veya kapsamlı işlerde süre uzayabilir. Net süreyi ön incelemeden sonra bildiririz.",
  },
  {
    q: "Periyodik bakımda neler kontrol edilir?",
    a: "Genellikle yağ/filtre değişimi, fren-süspansiyon genel kontrolü, sıvı kontrolleri ve güvenlik kontrolleri yapılır. Araç marka/modeline göre kapsam değişebilir.",
  },
  {
    q: "Fiyat nasıl belirleniyor?",
    a: "İşçilik süresi, hasarın büyüklüğü, parça/işlem türü ve araç tipi etkiler. En doğru fiyat için kısa bir ön değerlendirme yapıyoruz.",
  },
];

export default function SssPage() {
  return (
    <div>
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
            Sıkça Sorulan Sorular
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
            Randevu, boyasız göçük onarımı ve bakım süreçleriyle ilgili en sık
            sorulan soruları burada topladık.
          </p>
        </div>

        <div className="mt-8">
          <Accordion items={faqs} defaultOpenIndex={0} />
        </div>
      </Container>
    </div>
  );
}
