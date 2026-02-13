import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative size-20 overflow-hidden rounded-[var(--radius-sm)] md:size-24">
                <Image
                  src="/logo/logo.jpg"
                  alt="Özcan Oto Servis"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-[var(--font-heading)] text-lg">
                  {siteConfig.name}
                </div>
                <div className="mt-1 text-sm text-white/70">
                  {siteConfig.city}'de 1999'dan beri boyasız göçük onarımı,
                  periyodik bakım ve mekanik onarım.
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-[var(--font-heading)] text-sm">Hızlı Linkler</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              <Link className="hover:text-white" href="/services">
                Hizmetler
              </Link>
              <Link className="hover:text-white" href="/gallery">
                Galeri
              </Link>
              <Link className="hover:text-white" href="/contact">
                İletişim
              </Link>
              <Link className="hover:text-white" href="/faq">
                SSS
              </Link>
              <Link className="hover:text-white" href="/cookie-policy">
                Çerez Politikası
              </Link>
            </div>
          </div>

          <div>
            <div className="font-[var(--font-heading)] text-sm">İletişim</div>
            <div className="mt-3 grid gap-2 text-sm text-white/80">
              <a className="hover:text-white" href={`tel:${siteConfig.phoneTel}`}>
                Telefon: {siteConfig.phoneDisplay}
              </a>
              <a className="hover:text-white" href={`tel:${siteConfig.faxTel}`}>
                Faks: {siteConfig.faxDisplay}
              </a>
              <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <a
                className="hover:text-white"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
              <a
                className="hover:text-white"
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Adres: {siteConfig.address}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-2 rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-5 text-sm text-white/80 md:grid-cols-2">
          <div>
            <div className="font-[var(--font-heading)] text-white">Çalışma Saatleri</div>
            <div className="mt-1 text-white/70">{siteConfig.workingHours.week}</div>
            <div className="text-white/70">{siteConfig.workingHours.sunday}</div>
          </div>
          <div className="md:text-right">
            <div className="font-[var(--font-heading)] text-white">Hızlı İletişim</div>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end md:items-end">
              <a
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] bg-accent px-4 font-semibold text-black"
                href={`tel:${siteConfig.phoneTel}`}
              >
                Hemen Ara
              </a>
              <a
                className="group inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-white/20 px-4 font-semibold text-white hover:bg-white/10"
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <span className="transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-active:rotate-[360deg] group-focus-visible:rotate-[360deg]">
                  <Image
                    src="/icon/whatsapp.svg"
                    alt="WhatsApp"
                    width={22}
                    height={22}
                  />
                </span>
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-white/20 px-4 font-semibold text-white hover:bg-white/10"
                href="/contact"
              >
                Online Randevu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Özcan Oto Servis. Tüm hakları saklıdır.
        </div>
      </Container>
    </footer>
  );
}
