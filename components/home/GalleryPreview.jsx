import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";

const preview = [
  { src: "/images/images1.jpg", title: "Boyasız Göçük" },
  { src: "/images/images2.jpg", title: "Bakım" },
  { src: "/images/images3.jpg", title: "Mekanik" },
  { src: "/images/images4.jpg", title: "Detaylı İşçilik" },
];

export default function GalleryPreview() {
  return (
    <section>
      <Container className="py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
              Galeri
            </h2>
            <p className="mt-2 text-sm text-white/80 md:text-base">
              Öncesi/Sonrası örnek işlerimizden seçkiler.
            </p>
          </div>
          <Link
            href="/gallery"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:inline"
          >
            Galeriye Git
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {preview.map((x) => (
            <Link key={x.src} href="/gallery">
              <Card className="group p-0 overflow-hidden !border-white/10 !bg-black !text-white !ring-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={x.src}
                    alt={x.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full bg-black/60 px-3 py-1 text-xs font-semibold ring-1 ring-white/10">
                    Öncesi / Sonrası
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm font-semibold">{x.title}</div>
                  <div className="mt-1 text-xs text-white/70">
                    İncelemek için tıklayın
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
