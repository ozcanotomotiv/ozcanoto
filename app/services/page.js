import Container from "@/components/ui/Container";
import Link from "next/link";
import { Shield } from "lucide-react";
import ServicesGridWithModal from "@/components/services/ServicesGridWithModal";

export const metadata = {
  title: "Hizmetler",
  description:
    "Özcan Oto Servis hizmetleri: boyasız göçük, kaporta & boya, mekanik, elektrik & elektronik, estetik ve vale/vize hazırlığı.",
};

export default function ServicesPage() {
  return (
    <div>
      <Container className="py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
              <Shield size={14} className="text-accent" />
              Profesyonel Servis • Net Bilgilendirme
            </div>
            <h1 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">
              Hizmetler
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
              İhtiyacınıza uygun hizmeti seçin. Detayları inceleyin ve tek tıkla
              randevu alın.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent px-5 text-sm font-semibold text-brand shadow-[var(--shadow-soft)] hover:brightness-95"
          >
            Online Randevu
          </Link>
        </div>

        <ServicesGridWithModal />
      </Container>
    </div>
  );
}
