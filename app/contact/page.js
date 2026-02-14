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
    <div>
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
            İletişim
          </h1>
          <p className="mt-2 text-sm text-white/80 md:text-base">
            Hızlı randevu için arayın veya formu doldurun.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="!border-white/10 !bg-white/5 !text-white !ring-white/10">
            <div className="font-[var(--font-heading)] text-lg">Randevu</div>
            <div className="mt-4">
              <AppointmentForm />
            </div>
          </Card>

          <div className="grid gap-6">
            <Card className="!border-white/10 !bg-white/5 !text-white !ring-white/10">
              <div className="font-[var(--font-heading)] text-lg">Bilgiler</div>
              <div className="mt-4 grid gap-2 text-sm text-white/80">
                <a
                  className="font-semibold text-white hover:underline"
                  href={`tel:${siteConfig.phoneTel}`}
                >
                  Telefon: {siteConfig.phoneDisplay}
                </a>
                <a
                  className="font-semibold text-white hover:underline"
                  href={`tel:${siteConfig.faxTel}`}
                >
                  Faks: {siteConfig.faxDisplay}
                </a>
                <a
                  className="font-semibold text-white hover:underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
                <a
                  className="font-semibold text-white hover:underline"
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
                <a
                  className="hover:underline"
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold text-white">Adres:</span>{" "}
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
              <div className="p-4 text-xs text-white/70">
                Haritada açmak için{" "}
                <a
                  href={siteConfig.mapsUrl}
                  className="font-semibold text-white hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  tıklayın
                </a>
                .
              </div>
            </Card>

            <Card className="!border-white/10 !bg-white/5 !text-white !ring-white/10">
              <div className="font-[var(--font-heading)] text-lg">
                Çalışma Saatleri
              </div>
              <div className="mt-4 grid gap-2 text-sm text-white/80">
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Pazartesi</span>
                  <span className="text-white/80">{siteConfig.workingHours.monday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Salı</span>
                  <span className="text-white/80">{siteConfig.workingHours.tuesday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Çarşamba</span>
                  <span className="text-white/80">{siteConfig.workingHours.wednesday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Perşembe</span>
                  <span className="text-white/80">{siteConfig.workingHours.thursday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Cuma</span>
                  <span className="text-white/80">{siteConfig.workingHours.friday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Cumartesi</span>
                  <span className="text-white/80">{siteConfig.workingHours.saturday}</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center gap-2">
                  <span className="font-semibold text-white">Pazar</span>
                  <span className="text-white/80">{siteConfig.workingHours.sunday}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
