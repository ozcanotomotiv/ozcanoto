import Container from "@/components/ui/Container";

const items = [
  {
    title: "Uzman Ekip",
    desc: "Yılların tecrübesiyle her araca özenli yaklaşım.",
  },
  {
    title: "Güncel Teknoloji",
    desc: "Doğru ekipman, doğru teşhis ve temiz işçilik.",
  },
  {
    title: "Garanti ve Güven",
    desc: "İşin arkasında duran, şeffaf servis anlayışı.",
  },
  {
    title: "1999'dan Beri",
    desc: "Denizli'de köklü geçmiş, güçlü referanslar.",
  },
];

export default function WhyUs() {
  return (
    <section>
      <Container className="py-14">
        <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
          Neden Özcan Oto?
        </h2>
        <p className="mt-2 text-sm text-white/80 md:text-base">
          Hız, kalite ve güveni aynı anda sunan servis yaklaşımı.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-[var(--radius-md)] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6"
            >
              <div className="font-[var(--font-heading)] text-base">{x.title}</div>
              <div className="mt-2 text-sm text-white/80">{x.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
