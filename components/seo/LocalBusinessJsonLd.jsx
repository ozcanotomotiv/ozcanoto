import { siteConfig } from "@/lib/siteConfig";

export default function LocalBusinessJsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.shortName,
    url: baseUrl,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "TR",
    },
    openingHours: ["Mo-Sa 09:00-19:00"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
