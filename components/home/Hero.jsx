import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/images1.jpg"
          alt="Özcan Oto Servis"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 blur-0"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(243,156,18,0.26),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.07),transparent_45%),linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.75))]" />

      <Container className="relative py-12 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              {siteConfig.city} Oto Servis • Boyasız Göçük Uzmanı
            </div>

            <h1 className="mt-4 font-[var(--font-heading)] text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Aracın İçin
              <span className="text-accent"> Hızlı</span>,
              <br className="hidden md:block" />
              <span className="text-white"> Güvenilir</span> Servis
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
              1999'dan beri Özcan Oto Servis. Boyasız göçük onarımı, periyodik
              bakım ve mekanik onarımda net iletişim, temiz işçilik ve hızlı
              randevu.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href={`tel:${siteConfig.phoneTel}`}
                size="lg"
                className="sm:w-auto"
              >
                Hemen Ara
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline"
                size="lg"
                className="sm:w-auto"
              >
                Online Randevu
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { k: "1999", v: "Kuruluş" },
                { k: "Hızlı", v: "Randevu" },
                { k: "Şeffaf", v: "Bilgilendirme" },
              ].map((x) => (
                <div
                  key={x.v}
                  className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-[var(--font-heading)] text-white">
                    {x.k}
                  </div>
                  <div className="mt-1 text-xs text-white/70">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[var(--radius-md)] bg-[radial-gradient(circle_at_30%_30%,rgba(243,156,18,0.18),transparent_60%)]" />

            <div className="relative rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-white/70">
                    Hızlı Ön Değerlendirme
                  </div>
                  <div className="mt-1 font-[var(--font-heading)] text-xl">
                    En Çok Talep Edilenler
                  </div>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70 md:inline-flex">
                  Aynı Gün Dönüş
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    title: "Boyasız Göçük Onarımı",
                    desc: "Dolu hasarı ve kapı vurukları için boya koruyarak düzeltme.",
                  },
                  {
                    title: "Periyodik Bakım",
                    desc: "Yağ/filtre + fren kontrol + genel kontrol paketi.",
                  },
                  {
                    title: "Mekanik Onarım",
                    desc: "Arıza tespit ve güvenli sürüş için hızlı çözüm.",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-[var(--radius-md)] border border-white/10 bg-black/40 p-5 text-white shadow-[var(--shadow-soft)]"
                  >
                    <div className="font-[var(--font-heading)] text-base">
                      {x.title}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{x.desc}</div>
                    <div className="mt-4 text-sm font-semibold text-accent">
                      Detayları Gör →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
