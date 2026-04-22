"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand">
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
        <div className="relative animate-spin-slow">
          <div className="rounded-full border-4 border-accent/20 border-t-accent p-4">
            <Image
              src="/logo/logo.jpg"
              alt="Özcan Otomotiv"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
