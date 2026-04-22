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
    title: "Boyasız Göçük Onarımı (PDR)",
    shortDesc: "Dolu hasarı, kapı vurukları ve küçük göçüklerde boya koruyarak onarım.",
    fullDesc:
      "Boyasız göçük onarımı (PDR - Paintless Dent Repair), aracınızın orijinal boyasına hiç dokunmadan göçükleri düzeltme sanatıdır. 25 yılı aşkın tecrübemizle, özel ekipman ve teknikler kullanarak dolu hasarı, kapı vurukları, park kazaları ve küçük göçükleri orijinal fabrika kalitesinde restore ediyoruz. Bu yöntem sayesinde araç değeri korunur, işlem süresi kısalır ve maliyet düşer. Denizli'de PDR konusunda en deneyimli ekiplerden birine sahibiz.",
    Icon: Car,
    features: [
      "Orijinal fabrika boyası %100 korunur",
      "Çoğu işlemde aynı gün teslimat",
      "Profesyonel PDR ekipmanı ve teknikler",
      "25+ yıl dolu hasarı onarım tecrübesi",
      "Kapı vurukları ve park kazaları",
      "Küçük ve orta boy göçükler",
      "Araç değeri korunur",
      "Sigorta şirketleri ile çalışma",
      "İşçiliğe 1 yıl garanti",
      "Ücretsiz ön değerlendirme",
    ],
    process: [
      "Detaylı hasar tespiti ve fotoğraflama",
      "Ücretsiz fiyat teklifi ve süre bilgisi",
      "Özel PDR ekipmanı ile hassas düzeltme işlemi",
      "Işık altında kalite kontrolü",
      "Son kontrol ve müşteri onayı",
      "Garanti belgesi ile teslim",
    ],
    faqs: [
      {
        q: "Boyasız göçük onarımı (PDR) nedir ve nasıl çalışır?",
        a: "PDR, aracın boyasına hiç dokunmadan, özel metal çubuklar ve ışık sistemleri kullanarak göçükleri içeriden veya dışarıdan düzeltme tekniğidir. Metal hafızasından faydalanarak göçük orijinal haline getirilir. Bu sayede boya, zımpara veya dolgu malzemesi kullanılmaz.",
      },
      {
        q: "Hangi tür göçükler PDR ile onarılabilir?",
        a: "Boyada çatlama, kırık veya derin çizik olmayan, metalin kırılmadığı tüm göçükler PDR ile onarılabilir. Dolu hasarı, kapı vurukları, alışveriş arabası çarpmaları, park kazaları ideal PDR uygulamalarıdır. Göçüğün boyutu ve konumu önemlidir - değerlendirme için fotoğraf gönderebilirsiniz.",
      },
      {
        q: "Boyasız göçük onarımı ne kadar sürer?",
        a: "Tek bir küçük göçük 30-60 dakika, kapı vurukları 2-3 saat, orta boy dolu hasarı 4-6 saat sürebilir. Geniş çaplı dolu hasarlarında işlem 1-2 güne yayılabilir. Çoğu müşterimiz aynı gün aracını teslim alır.",
      },
      {
        q: "PDR maliyeti klasik kaporta boyaya göre nasıl?",
        a: "PDR, klasik kaporta boya işlemine göre %40-70 daha ekonomiktir. Boya, zımpara, dolgu malzemesi ve işçilik gerektirmediği için hem maliyet hem süre avantajı sağlar. Ayrıca aracın orijinal boyası korunduğu için ikinci el değeri düşmez.",
      },
      {
        q: "Garanti veriyor musunuz?",
        a: "Evet, tüm PDR işlemlerimize 1 yıl işçilik garantisi veriyoruz. Onarılan bölgede tekrar göçük oluşması durumunda (yeni bir darbe olmadıkça) ücretsiz düzeltme yapıyoruz. Garanti belgesi ile teslim ediyoruz.",
      },
      {
        q: "Sigorta ile çalışıyor musunuz?",
        a: "Evet, tüm sigorta şirketleri ile anlaşmalıyız. Dolu hasarı gibi durumlarda ekspertiz sürecini yönetiyor, gerekli evrakları hazırlıyoruz. Kasko poliçeniz varsa muafiyet tutarını öğrenip size bilgi veriyoruz.",
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
      "Aracınızın uzun ömürlü ve güvenli çalışması için düzenli periyodik bakım şarttır. 25 yıllık tecrübemizle, üretici önerilerine uygun bakım paketleri sunuyoruz. Motor yağı ve filtre değişimi, fren sistemi kontrolü, süspansiyon muayenesi, akü testi, lastik kontrolü ve genel güvenlik kontrolleri yapıyoruz. Kullandığınız yağ ve filtrelerin kalitesi, aracınızın performansını ve yakıt tüketimini doğrudan etkiler. Orijinal veya OEM kalitesinde malzeme kullanıyor, tüm işlemleri kayıt altına alıyoruz.",
    Icon: BadgeCheck,
    features: [
      "Motor yağı değişimi (sentetik/mineral)",
      "Yağ filtresi değişimi",
      "Hava filtresi kontrolü/değişimi",
      "Polen filtresi değişimi",
      "Fren sistemi kontrolü",
      "Fren balatası ölçümü",
      "Süspansiyon kontrolü",
      "Akü voltaj testi",
      "Lastik hava basıncı ayarı",
      "Lastik diş derinliği ölçümü",
      "Işık sistemi kontrolü",
      "Cam suyu ikmal",
    ],
    process: [
      "Araç kabulü ve kilometre kaydı",
      "Genel görsel kontrol",
      "Motor yağı ve filtre değişimi",
      "Hava ve polen filtresi kontrolü",
      "Fren sistemi muayenesi",
      "Süspansiyon ve rot kontrol",
      "Akü ve lastik kontrolü",
      "Test sürüşü ve son kontrol",
      "Bakım kaydı ve teslim",
    ],
    faqs: [
      {
        q: "Periyodik bakım ne sıklıkla yapılmalı?",
        a: "Üretici önerisine göre genellikle yılda bir veya 10,000-15,000 km'de bir bakım önerilir. Şehir içi yoğun kullanımda daha sık bakım gerekebilir. Aracınızın kullanım kılavuzunda belirtilen aralıklara uymak motor ömrünü uzatır.",
      },
      {
        q: "Hangi motor yağı kullanılıyor?",
        a: "Aracınızın üretici önerisine (5W-30, 10W-40 vb.) uygun sentetik veya mineral yağ kullanıyoruz. Castrol, Shell, Mobil, Total gibi kaliteli markaları tercih ediyoruz. Yağ seçimi motor tipine, yaşına ve kullanım koşullarına göre yapılır.",
      },
      {
        q: "Periyodik bakım maliyeti ne kadar?",
        a: "Maliyet aracın modeline, motor hacmine ve kullanılacak malzeme kalitesine göre değişir. Ortalama bir sedan araç için 1,500-3,000 TL arası değişir. Size özel fiyat teklifi için aracınızın bilgilerini paylaşabilirsiniz.",
      },
      {
        q: "Bakım sırasında başka sorun tespit edilirse?",
        a: "Bakım sırasında tespit edilen ek sorunları (fren balatası aşınması, süspansiyon problemi vb.) size bildirip onay alıyoruz. Acil olmayan işlemler için fiyat teklifi sunup, kararınıza göre ilerliyoruz. Şeffaf iletişim önceliğimizdir.",
      },
      {
        q: "Bakım ne kadar sürer?",
        a: "Standart periyodik bakım 1-2 saat sürer. Ek işlem gerekirse (fren balatası değişimi vb.) süre uzayabilir. Randevulu geldiğinizde bekletmeden işleminizi yapıyoruz. İsterseniz aracınızı bırakıp daha sonra teslim alabilirsiniz.",
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
      "Kaza, çarpma veya sürtme sonrası oluşan hasarlarda profesyonel kaporta düzeltme ve fırın boya hizmeti sunuyoruz. 25 yılı aşkın tecrübemizle, modern fırın boya sistemimiz ve bilgisayarlı renk eşleme teknolojimiz sayesinde aracınızı fabrika çıkışı kalitesinde restore ediyoruz. Tüm sigorta şirketleri ile anlaşmalıyız, ekspertiz sürecinden teslime kadar tüm süreci yönetiyoruz. Hem sigortalı hem de ücretli işlemlerde şeffaf fiyatlandırma ve kaliteli işçilik garantisi veriyoruz.",
    Icon: Paintbrush,
    features: [
      "Modern fırın boya sistemi",
      "Bilgisayarlı renk eşleme teknolojisi",
      "Orijinal ve yan sanayi yedek parça seçenekleri",
      "Tüm sigorta şirketleri ile anlaşma",
      "Ekspertiz süreci yönetimi",
      "Profesyonel kaporta düzeltme",
      "Detaylı ön hazırlık ve zımparalama",
      "Çok katmanlı boya uygulaması",
      "2 yıl boya garantisi",
      "Teslim öncesi detaylı kalite kontrolü",
    ],
    process: [
      "Detaylı hasar tespiti ve fotoğraflama",
      "Sigorta ekspertizi veya ücretli fiyat teklifi",
      "Parça siparişi ve tedarik",
      "Kaporta düzeltme ve ön hazırlık",
      "Zımparalama ve maskeleme işlemleri",
      "Astar, boya ve vernik uygulaması (fırında)",
      "Kuruma ve sertleşme süreci",
      "Montaj ve detaylı kalite kontrolü",
      "Müşteri onayı ve garanti belgesi ile teslim",
    ],
    faqs: [
      {
        q: "Kaporta boya işlemi ne kadar sürer?",
        a: "Hasarın büyüklüğüne göre değişir. Tek panel boyama 2-3 gün, çoklu panel veya büyük hasarlar 5-10 gün sürebilir. Parça temini gereken durumlarda süre uzayabilir. İlk değerlendirmede tahmini süreyi size bildiriyoruz.",
      },
      {
        q: "Hangi sigorta şirketleri ile çalışıyorsunuz?",
        a: "Anadolu Sigorta, Allianz, Axa, Mapfre, Sompo, HDI, Aksigorta, Groupama ve diğer tüm sigorta şirketleri ile anlaşmalıyız. Ekspertiz randevusu alıyor, gerekli evrakları hazırlıyor ve süreci sizin adınıza yönetiyoruz.",
      },
      {
        q: "Boya renk uyumu nasıl sağlanıyor?",
        a: "Bilgisayarlı renk eşleme sistemi ile aracınızın boya kodunu tespit edip, orijinal rengi laboratuvar ortamında hazırlıyoruz. Işık altında test yapıp, gerekirse ton ayarlaması yapıyoruz. Hedefimiz komşu panellerle %100 uyumlu sonuç almak.",
      },
      {
        q: "Orijinal parça mı kullanıyorsunuz?",
        a: "Hem orijinal hem de OEM kalitesinde yan sanayi parça seçenekleri sunuyoruz. Sigorta işlemlerinde ekspertiz raporuna göre, ücretli işlemlerde ise bütçenize ve tercihinize göre parça seçimi yapabilirsiniz. Her iki durumda da kalite garantisi veriyoruz.",
      },
      {
        q: "Boya garantisi var mı?",
        a: "Evet, tüm boya işlemlerimize 2 yıl garanti veriyoruz. Bu garanti boya dökülmesi, solması, kabarması gibi işçilik hatalarını kapsar. Garanti belgesi ile teslim ediyoruz. Yeni bir kaza veya dış etken olmadıkça garantimiz geçerlidir.",
      },
      {
        q: "Muafiyet tutarı nedir, nasıl ödenir?",
        a: "Muafiyet, kasko poliçenizde belirtilen ve her hasar durumunda sizin ödemeniz gereken sabit tutardır (genellikle 1.500-3.000 TL arası). Bu tutarı bize ödeyip, kalan tutarı sigorta şirketi karşılar. Muafiyet tutarınızı poliçenizden öğrenip size bilgi veriyoruz.",
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
