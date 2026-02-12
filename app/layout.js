import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import CookieBanner from "@/components/seo/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Özcan Oto Servis | Boyasız Göçük Merkezi (1999'dan beri)",
    template: "%s | Özcan Oto Servis",
  },
  description:
    "İzmir'de 1999'dan beri boyasız göçük onarımı, periyodik bakım ve mekanik onarım. Hemen arayın, hızlı randevu alın.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Özcan Oto Servis | Boyasız Göçük Merkezi (1999'dan beri)",
    description:
      "İzmir'de 1999'dan beri boyasız göçük onarımı, periyodik bakım ve mekanik onarım.",
    siteName: "Özcan Oto Servis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Özcan Oto Servis",
    description:
      "Boyasız göçük onarımı, periyodik bakım ve mekanik onarım. Hemen arayın.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${montserrat.variable} ${openSans.variable} min-h-dvh bg-brand text-brand-foreground antialiased`}
      >
        <LocalBusinessJsonLd />
        <Header />
        <main className="min-h-[calc(100dvh-4rem)] pb-20 pt-22 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <CookieBanner />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
