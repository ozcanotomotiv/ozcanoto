import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { servicesData } from "@/lib/serviceData";
import FAQSchema from "@/components/seo/FAQSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return {
      title: "Hizmet Bulunamadı",
    };
  }

  const keywords = [
    service.title.toLowerCase(),
    `${service.title.toLowerCase()} denizli`,
    ...service.features.map((f) => f.toLowerCase()),
    "özcan otomotiv",
    "denizli oto servis",
  ];

  return {
    title: service.title,
    description: service.fullDesc,
    keywords,
    openGraph: {
      title: `${service.title} | Özcan Otomotiv`,
      description: service.fullDesc,
      type: "website",
      images: [
        {
          url: "/logo/logo.jpg",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    return (
      <Container className="py-14">
        <h1 className="font-[var(--font-heading)] text-2xl">
          Hizmet bulunamadı
        </h1>
      </Container>
    );
  }

  const breadcrumbItems = [
    { name: "Ana Sayfa", url: "/" },
    { name: "Hizmetler", url: "/services" },
    { name: service.title },
  ];

  return (
    <div>
      <BreadcrumbSchema items={breadcrumbItems} />
      {service.faqs && <FAQSchema faqs={service.faqs} />}

      <Container className="py-10 md:py-14">
        <div className="mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowRight className="size-4 rotate-180" />
            Tüm Hizmetler
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-accent/20 bg-accent/10 p-3 ring-1 ring-accent/20">
                <service.Icon className="size-7 text-accent" />
              </div>
              <div>
                <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-3 text-sm text-white/80 md:text-base">
                  {service.fullDesc}
                </p>
              </div>
            </div>

            {service.features && (
              <Card className="mt-8 !border-white/10 !bg-white/5 !text-white !ring-white/10">
                <h2 className="font-[var(--font-heading)] text-xl">Özellikler</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-sm text-white/80">{feat}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {service.process && (
              <Card className="mt-6 !border-white/10 !bg-white/5 !text-white !ring-white/10">
                <h2 className="font-[var(--font-heading)] text-xl">Süreç Adımları</h2>
                <div className="mt-4 space-y-3">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent ring-1 ring-accent/20">
                        {idx + 1}
                      </div>
                      <span className="mt-0.5 text-sm text-white/80">{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {service.faqs && (
              <Card className="mt-6 !border-white/10 !bg-white/5 !text-white !ring-white/10">
                <h2 className="font-[var(--font-heading)] text-xl">
                  Sıkça Sorulan Sorular
                </h2>
                <div className="mt-4 space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group rounded-lg border border-white/10 bg-black/40 p-4"
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
            )}
          </div>

          <div className="space-y-6">
            <Card className="sticky top-20 !border-white/10 !bg-white/5 !text-white !ring-white/10">
              <h3 className="font-[var(--font-heading)] text-lg">Hızlı Randevu</h3>
              <p className="mt-2 text-sm text-white/70">
                Hemen arayın veya online randevu oluşturun.
              </p>
              <div className="mt-4 space-y-3">
                <Button
                  as="a"
                  href={`tel:${siteConfig.phoneTel}`}
                  className="w-full"
                >
                  Hemen Ara
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="outline"
                  className="w-full"
                >
                  Online Randevu
                </Button>
              </div>
            </Card>

            <Card className="!border-white/10 !bg-white/5 !text-white !ring-white/10">
              <h3 className="font-[var(--font-heading)] text-lg">İletişim Bilgileri</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="font-semibold text-white">Telefon</div>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="text-white/70 hover:text-accent"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 hover:text-accent"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-white">Adres</div>
                  <p className="text-white/70">{siteConfig.address}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
