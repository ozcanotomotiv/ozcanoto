import Container from "@/components/ui/Container";

export default function QuickStats() {
  const stats = [
    { value: "25+", label: "Yıllık Tecrübe" },
    { value: "10,000+", label: "Mutlu Müşteri" },
    { value: "15,000+", label: "Tamamlanan İşlem" },
    { value: "4.8/5", label: "Müşteri Puanı" },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-accent/5 via-transparent to-accent/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(243,156,18,0.08),transparent_70%)]" />
      <Container className="relative py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[var(--font-heading)] text-4xl text-accent md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
