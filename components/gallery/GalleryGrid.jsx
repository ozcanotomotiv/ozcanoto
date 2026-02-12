"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import Lightbox from "@/components/gallery/Lightbox";
import Button from "@/components/ui/Button";

const categories = [
  { key: "all", label: "Tümü" },
  { key: "boyasiz-gocuk", label: "Boyasız Göçük" },
  { key: "bakim", label: "Bakım" },
  { key: "onarim", label: "Onarım" },
];

const seedItems = [
  { id: "1", category: "boyasiz-gocuk", title: "Kapı Vuruğu" },
  { id: "2", category: "boyasiz-gocuk", title: "Dolu Hasarı" },
  { id: "3", category: "bakim", title: "Periyodik Kontrol" },
  { id: "4", category: "onarim", title: "Mekanik Müdahale" },
  { id: "5", category: "boyasiz-gocuk", title: "Çamurluk Göçüğü" },
  { id: "6", category: "bakim", title: "Fren Kontrol" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("all");
  const [openItem, setOpenItem] = useState(null);

  const items = useMemo(() => {
    if (active === "all") return seedItems;
    return seedItems.filter((x) => x.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c.key === active;
          return (
            <Button
              key={c.key}
              type="button"
              variant={isActive ? "primary" : "secondary"}
              size="sm"
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </Button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => (
          <button
            key={x.id}
            type="button"
            className="text-left"
            onClick={() => setOpenItem(x)}
          >
            <Card className="p-0 overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <BeforeAfterSlider className="h-56" />
              <div className="p-4">
                <div className="text-sm font-semibold">{x.title}</div>
                <div className="mt-1 text-xs text-text-muted">
                  Kategori: {categories.find((c) => c.key === x.category)?.label}
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>

      <Lightbox
        open={!!openItem}
        title={openItem?.title}
        onClose={() => setOpenItem(null)}
      >
        <BeforeAfterSlider className="h-72" />
        <div className="mt-4 text-sm text-text-muted">
          Sonraki adımda Firebase Storage görselleri (before/after) ile gerçek
          içerik bağlanacak.
        </div>
      </Lightbox>
    </div>
  );
}
