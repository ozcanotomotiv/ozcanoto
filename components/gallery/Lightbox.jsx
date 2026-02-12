"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Lightbox({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e) {
      if (e.key === "Escape") onClose?.();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Kapat"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative w-full max-w-4xl overflow-hidden rounded-[var(--radius-md)] bg-surface text-text shadow-[var(--shadow-soft)]",
          "ring-1 ring-black/10"
        )}
      >
        <div className="flex items-center justify-between gap-4 border-b border-black/10 px-4 py-3">
          <div className="truncate text-sm font-semibold">{title}</div>
          <button
            type="button"
            onClick={onClose}
            className="h-10 rounded-[var(--radius-sm)] px-3 text-sm font-semibold text-text hover:bg-muted"
          >
            Kapat
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
