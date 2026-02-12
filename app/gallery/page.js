import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Galeri",
  description: "Öncesi/Sonrası örnek işler ve uygulamalar.",
};

export default function GalleryPage() {
  return (
    <div className="bg-muted">
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl text-text md:text-4xl">
            Galeri
          </h1>
          <p className="mt-2 text-sm text-text-muted md:text-base">
            Boyasız göçük, bakım ve onarım örnekleri.
          </p>
        </div>

        <div className="mt-8">
          <GalleryGrid />
        </div>
      </Container>
    </div>
  );
}
