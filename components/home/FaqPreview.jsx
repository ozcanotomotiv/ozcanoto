import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import Link from "next/link";

const items = [
  {
    q: "Randevu almadan gelebilir miyim?",
    a: "Yoğunluğa göre değişir. Hızlı işlem için randevu öneririz.",
  },
  {
    q: "Boyasız göçük onarımı her hasara olur mu?",
    a: "Boya çatlağı yoksa çoğu göçükte uygulanabilir. Kesin karar için inceleme gerekir.",
  },
  {
    q: "İşlem süresi ne kadar?",
    a: "İşin türüne göre değişir. Bazı işlemler aynı gün tamamlanabilir.",
  },
];

export default function FaqPreview() {
  return (
    <section>
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
              En çok gelen sorulara kısa cevaplar. Tümünü görmek için SSS sayfasına
              geçebilirsiniz.
            </p>
          </div>
          <Link
            href="/faq"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            Tüm SSS
          </Link>
        </div>

        <div className="mt-8">
          <Accordion items={items} defaultOpenIndex={0} />
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/faq"
            className="text-sm font-semibold text-white/80 hover:text-white"
          >
            Tüm SSS →
          </Link>
        </div>
      </Container>
    </section>
  );
}
