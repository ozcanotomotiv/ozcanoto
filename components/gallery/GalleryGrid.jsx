"use client";

import { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import BeforeAfterSlider from "@/components/gallery/BeforeAfterSlider";
import Button from "@/components/ui/Button";

const categories = [
  { key: "all", label: "Tümü" },
  { key: "boyasiz-gocuk", label: "Boyasız Göçük" },
  { key: "bakim", label: "Bakım" },
  { key: "onarim", label: "Onarım" },
];

export default function GalleryGrid({ items: initialItems = [] }) {
  const [active, setActive] = useState("all");

  const items = useMemo(() => {
    if (active === "all") return initialItems;
    return initialItems.filter((x) => x.category === active);
  }, [active, initialItems]);

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
          <div
            key={x.id}
            className="text-left"
          >
            <Card className="p-0 overflow-hidden !border-white/10 !bg-black !text-white !ring-white/10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <BeforeAfterSlider
                className="h-56"
                beforeSrc={x.beforeSrc}
                afterSrc={x.afterSrc}
              />
              <div className="p-4">
                <div className="text-sm font-semibold">{x.title}</div>
                <div className="mt-1 text-xs text-white/70">
                  Kategori: {categories.find((c) => c.key === x.category)?.label}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
