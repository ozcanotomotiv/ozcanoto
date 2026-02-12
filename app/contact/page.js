import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "İletişim",
  description:
    "Özcan Oto Servis iletişim bilgileri, çalışma saatleri ve randevu formu.",
};

export default function ContactPage() {
  const mapEmbedSrc =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(siteConfig.address) +
    "&output=embed";

  return (
    <div className="bg-muted">
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl text-text md:text-4xl">
            İletişim
          </h1>
          <p className="mt-2 text-sm text-text-muted md:text-base">
            Hızlı randevu için arayın veya formu doldurun.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="font-[var(--font-heading)] text-lg">Randevu</div>
            <div className="mt-4">
              <AppointmentForm />
            </div>
          </Card>

          <div className="grid gap-6">
            <Card>
              <div className="font-[var(--font-heading)] text-lg">Bilgiler</div>
              <div className="mt-4 grid gap-2 text-sm text-text-muted">
                <a
                  className="font-semibold text-text hover:underline"
                  href={`tel:${siteConfig.phoneTel}`}
                >
                  Telefon: {siteConfig.phoneDisplay}
                </a>
                <a
                  className="font-semibold text-text hover:underline"
                  href={`tel:${siteConfig.faxTel}`}
                >
                  Faks: {siteConfig.faxDisplay}
                </a>
                <a
                  className="font-semibold text-text hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
                <a
                  className="hover:underline"
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold text-text">Adres:</span>{" "}
                  {siteConfig.address}
                </a>
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <div className="relative aspect-[16/9]">
                <iframe
                  title="Harita"
                  src={mapEmbedSrc}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 text-xs text-text-muted">
                Haritada açmak için{" "}
                <a
                  href={siteConfig.mapsUrl}
                  className="font-semibold text-text hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  tıklayın
                </a>
                .
              </div>
            </Card>

            <Card>
              <div className="font-[var(--font-heading)] text-lg">
                Çalışma Saatleri
              </div>
              <div className="mt-4 grid gap-2 text-sm text-text-muted">
                <div>
                  <span className="font-semibold text-text">{siteConfig.workingHours.week}</span>
                </div>
                <div>
                  <span className="font-semibold text-text">{siteConfig.workingHours.sunday}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
