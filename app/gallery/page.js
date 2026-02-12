import Container from "@/components/ui/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import fs from "node:fs/promises";
import path from "node:path";

export const metadata = {
  title: "Galeri",
  description: "Öncesi/Sonrası örnek işler ve uygulamalar.",
};

function parseBeforeAfterPairs(fileNames) {
  const map = new Map();

  const getKey = (rawName) => {
    const name = rawName.replace(/\.[^/.]+$/, "");
    const lower = name.toLowerCase();

    if (lower.includes("öncesi")) {
      return {
        key: name.replace(/\s*öncesi.*$/i, "").trim(),
        type: "before",
      };
    }

    if (lower.includes("sonrası")) {
      return {
        key: name.replace(/\s*sonrası.*$/i, "").trim(),
        type: "after",
      };
    }

    return { key: name.trim(), type: "unknown" };
  };

  for (const file of fileNames) {
    const { key, type } = getKey(file);
    if (!map.has(key)) map.set(key, { title: key });
    const entry = map.get(key);

    if (type === "before") entry.before = file;
    if (type === "after") entry.after = file;
  }

  return Array.from(map.entries())
    .map(([key, v], idx) => ({
      id: String(idx + 1),
      category: "boyasiz-gocuk",
      title: v.title || key,
      beforeSrc: v.before ? `/before-after/${encodeURIComponent(v.before)}` : null,
      afterSrc: v.after ? `/before-after/${encodeURIComponent(v.after)}` : null,
    }))
    .filter((x) => x.beforeSrc && x.afterSrc);
}

export default async function GalleryPage() {
  const dir = path.join(process.cwd(), "public", "before-after");
  const fileNames = await fs.readdir(dir);
  const imageFiles = fileNames.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const items = parseBeforeAfterPairs(imageFiles);

  return (
    <div>
      <Container className="py-10 md:py-14">
        <div>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl">
            Galeri
          </h1>
          <p className="mt-2 text-sm text-white/80 md:text-base">
            Boyasız göçük, bakım ve onarım örnekleri.
          </p>
        </div>

        <div className="mt-8">
          <GalleryGrid items={items} />
        </div>
      </Container>
    </div>
  );
}
