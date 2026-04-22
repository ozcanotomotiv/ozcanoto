import Card from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";

export default function ContactFAQ() {
  const faqs = [
    {
      q: "Randevu almadan gelebilir miyim?",
      a: "Evet, ancak randevulu müşterilerimize öncelik veriyoruz. Bekleme sürenizi azaltmak için randevu almanızı öneririz.",
    },
    {
      q: "Ödeme seçenekleri nelerdir?",
      a: "Nakit, kredi kartı ve havale ile ödeme kabul ediyoruz. Tüm kartlara taksit imkanı sunuyoruz.",
    },
    {
      q: "Aracımı bırakıp gidebilir miyim?",
      a: "Evet, aracınızı bırakıp gidebilirsiniz. İşlem tamamlandığında sizi arayarak bilgilendiriyoruz.",
    },
    {
      q: "Garanti süresi ne kadar?",
      a: "İşçilik garantimiz 1 yıl, kullandığımız orijinal parçalar için üretici garantisi geçerlidir.",
    },
  ];

  return (
    <Card className="!border-white/10 !bg-white/5 !text-white !ring-white/10">
      <div className="font-[var(--font-heading)] text-lg">
        Sıkça Sorulan Sorular
      </div>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-[var(--radius-md)] border border-white/10 bg-black/40 p-4"
          >
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
              {faq.q}
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm text-white/70">{faq.a}</p>
          </details>
        ))}
      </div>
    </Card>
  );
}
