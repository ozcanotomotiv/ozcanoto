"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wrench, Images, PhoneCall, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/siteConfig";

const items = [
  { href: "/services", label: "Hizmetler", Icon: Wrench },
  { href: "/gallery", label: "Galeri", Icon: Images },
  { href: "/contact", label: "Randevu", Icon: MessageCircle },
  { href: `tel:${siteConfig.phoneTel}`, label: "Ara", Icon: PhoneCall },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[70] border-t border-white/10 bg-black/95 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-[1280px] grid-cols-4">
        {items.map(({ href, label, Icon }) => {
          const active = href.startsWith("tel:")
            ? false
            : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold",
                active ? "text-accent" : "text-white/70",
                "hover:text-white"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
