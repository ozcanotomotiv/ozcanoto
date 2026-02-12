"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const KEY = "ozcanoto_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(KEY, "accepted");
    } catch {}
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(KEY, "rejected");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-[60]",
        "bottom-20 md:bottom-4"
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="rounded-[var(--radius-md)] border border-white/10 bg-black/85 p-4 text-white shadow-[var(--shadow-soft)] ring-1 ring-white/10 backdrop-blur">
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-sm text-white/80">
              Deneyimi iyileştirmek için çerezleri kullanıyoruz. Devam ederek çerez
              kullanımını kabul edersiniz.{" "}
              <Link className="font-semibold text-white hover:underline" href="/cookie-policy">
                Detaylar
              </Link>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button variant="outline" size="sm" onClick={reject}>
                Reddet
              </Button>
              <Button size="sm" onClick={accept}>
                Kabul Et
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
