import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import fs from "node:fs/promises";
import path from "node:path";

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
    .map(([key, v]) => ({
      title: v.title || key,
      beforeSrc: v.before ? `/before-after/${encodeURIComponent(v.before)}` : null,
      afterSrc: v.after ? `/before-after/${encodeURIComponent(v.after)}` : null,
    }))
    .filter((x) => x.beforeSrc && x.afterSrc);
}

export default async function GalleryPreview() {
  const dir = path.join(process.cwd(), "public", "before-after");
  const fileNames = await fs.readdir(dir);
  const imageFiles = fileNames.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const pairs = parseBeforeAfterPairs(imageFiles);
  const preview = pairs.slice(0, 4);

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
            <Link key={x.afterSrc} href="/gallery">
              <Card className="group p-0 overflow-hidden !border-white/10 !bg-black !text-white !ring-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={x.afterSrc}
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
