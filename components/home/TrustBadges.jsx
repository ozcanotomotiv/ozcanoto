import Container from "@/components/ui/Container";
import { Shield, Award, Clock, ThumbsUp } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Garantili İşçilik",
      desc: "Tüm hizmetlerimizde garanti",
    },
    {
      icon: Award,
      title: "25+ Yıl Tecrübe",
      desc: "1999'dan beri sektörde",
    },
    {
      icon: Clock,
      title: "Hızlı Servis",
      desc: "Aynı gün teslimat seçeneği",
    },
    {
      icon: ThumbsUp,
      title: "Müşteri Memnuniyeti",
      desc: "4.8/5 ortalama puan",
    },
  ];

  return (
    <section className="border-y border-white/10 bg-white/5">
      <Container className="py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-start gap-4 rounded-[var(--radius-md)] border border-white/10 bg-black/40 p-5 ring-1 ring-white/10 transition-transform hover:-translate-y-1"
            >
              <div className="rounded-full bg-accent/10 p-3 ring-1 ring-accent/20">
                <badge.icon className="size-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-white">{badge.title}</div>
                <div className="mt-1 text-xs text-white/70">{badge.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
