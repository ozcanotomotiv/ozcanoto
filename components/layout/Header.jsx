"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { ImageIcon, PhoneCall, Wrench, BadgeCheck } from "lucide-react";

const navItems = [
  { href: "/services", label: "Hizmetler", Icon: Wrench },
  { href: "/brands", label: "Markalar", Icon: BadgeCheck },
  { href: "/gallery", label: "Galeri", Icon: ImageIcon },
  { href: "/contact", label: "İletişim", Icon: PhoneCall },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed left-0 right-0 top-0 z-50 border-b border-white/10 transition-[background-color,backdrop-filter] " +
        (scrolled ? "bg-black/60 backdrop-blur-2xl" : "bg-black/95 backdrop-blur")
      }
    >
      <Container className="flex h-22 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-14 overflow-hidden rounded-[var(--radius-sm)] md:size-16">
            <Image
              src="/logo/logo.jpg"
              alt="Özcan Oto Servis"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="font-[var(--font-heading)] text-base tracking-tight text-white">
              Özcan Oto Servis
            </div>
            <div className="text-xs text-white/60">1999'dan beri</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navItems.map((x) => (
            <Link
              key={x.href}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              href={x.href}
            >
              <x.Icon size={16} className="text-white/60" />
              {x.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            as="a"
            href={`tel:${siteConfig.phoneTel}`}
            variant="outline"
            size="sm"
            className="hidden md:inline-flex"
          >
            Hemen Ara
          </Button>
          <Button as={Link} href="/contact" size="sm">
            Randevu Al
          </Button>
        </div>
      </Container>
    </header>
  );
}
