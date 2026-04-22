import {
  Car,
  Tag,
  BadgeCheck,
  Wrench,
  Paintbrush,
  Zap,
  Sparkles,
  Truck,
  ClipboardCheck,
} from "lucide-react";

export const servicesData = {
  "boyasiz-gocuk": {
    title: "Boyasız Göçük Onarımı",
    shortDesc: "Dolu hasarı, kapı vurukları ve küçük göçüklerde boya koruyarak onarım.",
    fullDesc:
      "Kaporta boyasına zarar vermeden, özel ekipman ve tekniklerle göçükleri düzeltiriz. Dolu hasarı, kapı vurukları ve küçük göçüklerde hızlı çözüm sunarız.",
    Icon: Car,
    features: [
      "Orijinal boya korunur",
      "Aynı gün teslimat",
      "Özel ekipman kullanımı",
      "Dolu hasarı uzmanı",
      "Kapı vurukları",
      "Küçük göçükler",
    ],
    process: [
      "Hasar tespiti ve fiyat bilgisi",
      "Özel ekipmanla göçük düzeltme",
      "Kalite kontrolü",
      "Teslim",
    ],
    faqs: [
      {
        q: "Boyasız göçük onarımı ne kadar sürer?",
        a: "Çoğu işlem 2-4 saat içinde tamamlanır. Büyük hasarlarda aynı gün teslimat yapılır.",
      },
      {
        q: "Hangi göçükler onarılabilir?",
        a: "Boyada çatlama olmayan, metal kırılması bulunmayan göçükler onarılabilir.",
      },
      {
        q: "Garanti var mı?",
        a: "Evet, işçiliğimize 1 yıl garanti veriyoruz.",
      },
    ],
  },
  "celik-rutus": {
    title: "Çelik Rötuş",
    shortDesc: "Küçük çizik ve lokal kusurlarda hızlı rötuş çözümleriyle temiz görünüm.",
    fullDesc:
      "Küçük çizikler, taş izleri ve lokal kusurlarda hızlı rötuş çözümleri sunarız. Aracın görünümünü temizleyip gözle görülen kusurları minimuma indiririz.",
    Icon: Tag,
    features: [
      "Hızlı işlem",
      "Lokal rötuş",
      "Taş izi giderme",
      "Çizik onarımı",
      "Uygun fiyat",
    ],
    process: [
      "Kusur tespiti",
      "Rötuş işlemi",
      "Parlatma",
      "Teslim",
    ],
    faqs: [
      {
        q: "Rötuş kalıcı mı?",
        a: "Evet, doğru uygulama ile kalıcı sonuç alınır.",
      },
      {
        q: "Hangi kusurlar giderilir?",
        a: "Küçük çizikler, taş izleri ve lokal boya kusurları giderilebilir.",
      },
    ],
  },
  "periyodik-bakim": {
    title: "Periyodik Bakım",
    shortDesc: "Yağ, filtre, fren ve genel kontrol ile güvenli sürüş.",
    fullDesc:
      "Yağ ve filtre değişimi, fren kontrolleri ve genel muayene ile aracınızın performansını koruruz. Güvenli sürüş için düzenli bakım planları sunarız.",
    Icon: BadgeCheck,
    features: [
      "Motor yağı değişimi",
      "Filtre değişimi",
      "Fren kontrolü",
      "Akü kontrolü",
      "Lastik kontrolü",
      "Genel muayene",
    ],
    process: [
      "Araç kabulü ve kontrol",
      "Yağ ve filtre değişimi",
      "Fren ve lastik kontrolü",
      "Test sürüşü ve teslim",
    ],
    faqs: [
      {
        q: "Ne sıklıkla bakım yapılmalı?",
        a: "Üretici önerisine göre genellikle 10,000-15,000 km'de bir bakım önerilir.",
      },
      {
        q: "Hangi yağ kullanılıyor?",
        a: "Aracınızın üretici önerisine uygun orijinal veya eşdeğer kaliteli yağ kullanıyoruz.",
      },
    ],
  },
  "mekanik-onarim": {
    title: "Mekanik Onarım",
    shortDesc: "Motor arızaları, alt takım, yürüyen aksam ve kapsamlı işçilik çözümleri.",
    fullDesc:
      "Periyodik bakımın dışında; motor arızaları, alt takım, yürüyen aksam ve işçilik gerektiren mekanik ihtiyaçlarınız için doğru teşhis ve sağlam işçilikle hizmet veririz.",
    Icon: Wrench,
    features: [
      "Motor onarımı",
      "Şanzıman bakımı",
      "Alt takım",
      "Yürüyen aksam",
      "Fren sistemi",
      "Süspansiyon",
    ],
    process: [
      "Arıza tespiti",
      "Fiyat bilgisi",
      "Onarım işlemi",
      "Test ve teslim",
    ],
    faqs: [
      {
        q: "Orijinal parça mı kullanılıyor?",
        a: "Evet, orijinal veya OEM kalitesinde parça kullanıyoruz.",
      },
      {
        q: "Garanti süresi nedir?",
        a: "İşçiliğe 1 yıl, parçalara üretici garantisi geçerlidir.",
      },
    ],
  },
  "kaporta-boya": {
    title: "Kaporta & Boya",
    shortDesc: "Sigorta hasarı ve ücretli işlemler: kaporta düzeltme, boya ve onarım süreçleri.",
    fullDesc:
      "Kaporta düzeltme, boya işlemleri ve hasar onarımında hem ücretli hem de sigorta üzerinden süreç yönetimi sunarız. Hasarı inceler, işlemleri planlar ve teslim öncesi kontrolleri tamamlarız.",
    Icon: Paintbrush,
    features: [
      "Fırın boya sistemi",
      "Renk uyumu garantisi",
      "Sigorta işlemleri",
      "Kaporta düzeltme",
      "Detaylı işçilik",
      "Kalite kontrolü",
    ],
    process: [
      "Hasar tespiti ve ekspertiz",
      "Kaporta düzeltme",
      "Boya işlemi",
      "Kalite kontrolü ve teslim",
    ],
    faqs: [
      {
        q: "Sigorta ile çalışıyor musunuz?",
        a: "Evet, tüm sigorta şirketleri ile anlaşmalıyız.",
      },
      {
        q: "Boya garantisi var mı?",
        a: "Evet, boyamaya 2 yıl garanti veriyoruz.",
      },
    ],
  },
  "elektrik-elektronik": {
    title: "Elektrik & Elektronik",
    shortDesc: "Arıza tespiti, elektrik sistemleri, sensör/aksam kontrolleri ve onarımlar.",
    fullDesc:
      "Elektrik sistemleri ve elektronik arızalarda arıza tespiti, sensör/aksam kontrolleri ve onarım süreçlerini yönetiriz. En doğru çözüm için ölçüm ve testlerle ilerleriz.",
    Icon: Zap,
    features: [
      "Arıza tespit cihazı",
      "Sensör kontrolü",
      "Elektrik sistemleri",
      "Elektronik onarım",
      "Kablo bakımı",
      "Test ve ölçüm",
    ],
    process: [
      "Arıza tespiti",
      "Ölçüm ve test",
      "Onarım",
      "Kontrol ve teslim",
    ],
    faqs: [
      {
        q: "Hangi arızalar tespit edilir?",
        a: "Motor, şanzıman, ABS, airbag ve tüm elektronik sistem arızaları tespit edilir.",
      },
      {
        q: "Tespit ücreti var mı?",
        a: "Tespit ücreti alınır, onarım yapılırsa bu ücret düşülür.",
      },
    ],
  },
  "estetik": {
    title: "Estetik (Pasta Cila / Seramik / Kuaför)",
    shortDesc: "Pasta-cila, boya koruma, seramik kaplama ve detaylı iç/dış temizlik paketleri.",
    fullDesc:
      "Estetik bakım paketlerimiz; pasta-cila, boya koruma, seramik kaplama ve detaylı iç/dış kuaför hizmetlerini kapsar. Aracınızın parlaklığını ve korumasını artırmak için doğru ürün ve uygulama seçimi yaparız.",
    Icon: Sparkles,
    features: [
      "Pasta-cila",
      "Seramik kaplama",
      "İç temizlik",
      "Dış temizlik",
      "Far parlatma",
      "Motor temizliği",
    ],
    process: [
      "Araç değerlendirme",
      "Detaylı temizlik",
      "Pasta-cila / Seramik",
      "Kalite kontrolü",
    ],
    faqs: [
      {
        q: "Seramik kaplama ne kadar dayanır?",
        a: "Kaliteli seramik kaplama 2-3 yıl koruma sağlar.",
      },
      {
        q: "Hangi ürünler kullanılıyor?",
        a: "Profesyonel ve kaliteli markalar kullanıyoruz.",
      },
    ],
  },
  "vale-hizmeti": {
    title: "Vale Hizmeti (Evden alıp teslim)",
    shortDesc: "Aracınızı evden alıyor, işlemler sonrası güvenle teslim ediyoruz.",
    fullDesc:
      "Zamanınız kısıtlıysa aracı evinizden/iş yerinizden teslim alıp işlemler tamamlandığında tekrar teslim ederiz. Süreç boyunca bilgilendirme yaparız.",
    Icon: Truck,
    features: [
      "Evden alma",
      "Güvenli taşıma",
      "Süreç bilgilendirme",
      "Eve teslim",
      "Sigortalı hizmet",
    ],
    process: [
      "Randevu ve adres bilgisi",
      "Araç teslim alma",
      "İşlem süreci",
      "Eve teslim",
    ],
    faqs: [
      {
        q: "Vale ücreti nedir?",
        a: "Mesafeye göre değişir, randevu sırasında bilgi verilir.",
      },
      {
        q: "Sigortalı mı?",
        a: "Evet, taşıma sırasında sigorta kapsamındadır.",
      },
    ],
  },
  "vize-hazirligi": {
    title: "Vize Hazırlığı",
    shortDesc: "Aracınızı tamamen bize bırakın: kontrol, eksiklerin tamamlanması ve hazırlık.",
    fullDesc:
      "Aracınızı tamamen bize bırakın. Kontrolleri yapalım, gerekli hazırlıkları ve eksiklerin giderilmesini planlayalım. Hazır olduğunda sizi bilgilendirip teslim edelim.",
    Icon: ClipboardCheck,
    features: [
      "Genel kontrol",
      "Eksik tespiti",
      "Onarım planlaması",
      "Vize hazırlığı",
      "Bilgilendirme",
    ],
    process: [
      "Araç kabulü",
      "Detaylı kontrol",
      "Eksiklerin giderilmesi",
      "Vize hazırlığı ve teslim",
    ],
    faqs: [
      {
        q: "Ne kadar sürer?",
        a: "Eksiklere göre değişir, genellikle 1-2 gün içinde tamamlanır.",
      },
      {
        q: "Hangi kontroller yapılır?",
        a: "Fren, lastik, ışık, egzoz ve tüm güvenlik kontrolleri yapılır.",
      },
    ],
  },
};
