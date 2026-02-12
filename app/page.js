import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import TeamSlider from "@/components/home/TeamSlider";
import Process from "@/components/home/Process";
import Coverage from "@/components/home/Coverage";
import FaqPreview from "@/components/home/FaqPreview";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <div>
      <Hero />
      <Reveal from="left" distance={26} once={false}>
        <Services />
      </Reveal>
      <Reveal from="right" distance={26} delayMs={80} once={false}>
        <WhyUs />
      </Reveal>
      <Reveal from="left" distance={26} delayMs={120} once={false}>
        <TeamSlider />
      </Reveal>
      <Reveal from="right" distance={26} delayMs={140} once={false}>
        <Process />
      </Reveal>
      <Reveal from="left" distance={26} delayMs={160} once={false}>
        <Coverage />
      </Reveal>
      <Reveal from="right" distance={26} delayMs={180} once={false}>
        <GalleryPreview />
      </Reveal>
      <Reveal from="left" distance={26} delayMs={200} once={false}>
        <FaqPreview />
      </Reveal>

      <section>
        <Container className="py-14">
          <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
                  Hemen Randevu Alın
                </h2>
                <p className="mt-2 text-sm text-white/80 md:text-base">
                  Aracınızın ihtiyacını hızlıca değerlendirelim. Telefonla arayın
                  veya randevu formunu doldurun.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button as="a" href={`tel:${siteConfig.phoneTel}`} size="lg">
                  Hemen Ara
                </Button>
                <Button as={Link} href="/contact" variant="outline" size="lg">
                  Randevu Formu
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
