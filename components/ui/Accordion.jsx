"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({ items, className, defaultOpenIndex = -1 }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((x, idx) => {
        const open = openIndex === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const buttonId = `${baseId}-button-${idx}`;

        return (
          <div
            key={x.q}
            className={cn(
              "rounded-[var(--radius-md)] border border-white/10 bg-black/40 text-white ring-1 ring-white/10",
              open && "bg-black/55"
            )}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-[var(--font-heading)] text-sm md:text-base">
                {x.q}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-white/70 transition-transform",
                  open && "rotate-180"
                )}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden px-5 transition-[grid-template-rows,opacity] duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0 text-sm text-white/75">{x.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
