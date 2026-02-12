import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const stats = [
  { k: "1999", v: "Kuruluş" },
  { k: "Aynı Gün", v: "Dönüş" },
  { k: "Şeffaf", v: "Bilgilendirme" },
  { k: "Usta", v: "İşçilik" },
];

export default function TrustStats() {
  return (
    <section>
      <Container className="py-14">
        <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/80">
                <span className="inline-block size-1.5 rounded-full bg-accent" />
                Güven ve Kalite
              </div>
              <h2 className="mt-4 font-[var(--font-heading)] text-2xl md:text-3xl">
                Daha hızlı randevu, daha net servis
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">
                İşinizi uzatmadan çözelim. Önce doğru tespit, sonra doğru işlem.
                İster telefonla hızlıca konuşalım, ister online randevu ile
                başlayalım.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((x) => (
                <Card
                  key={x.v}
                  className="!border-white/10 !bg-black/50 !text-white !ring-white/10"
                >
                  <div className="font-[var(--font-heading)] text-xl">
                    {x.k}
                  </div>
                  <div className="mt-1 text-xs text-white/70">{x.v}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
