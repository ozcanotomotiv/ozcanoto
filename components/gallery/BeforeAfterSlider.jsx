"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Önce",
  afterLabel = "Sonra",
  className,
}) {
  const id = useId();
  const [value, setValue] = useState(50);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] bg-gradient-to-br from-white to-muted",
        className
      )}
    >
      <div className="absolute inset-0">
        {beforeSrc ? (
          <Image
            src={beforeSrc}
            alt={beforeLabel}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-xs font-semibold text-text-muted">
            {beforeLabel}
          </div>
        )}
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt={afterLabel}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-xs font-semibold text-text-muted">
              {afterLabel}
            </div>
          )}
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-accent"
          style={{ left: `${value}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-accent px-2 py-1 text-xs font-semibold text-brand shadow-[var(--shadow-soft)]"
          style={{ left: `${value}%` }}
        >
          {value}%
        </div>
      </div>

      <input
        aria-label="Önce/Sonra karşılaştırma"
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="relative z-10 h-56 w-full cursor-ew-resize opacity-0 md:h-64"
      />
    </div>
  );
}
