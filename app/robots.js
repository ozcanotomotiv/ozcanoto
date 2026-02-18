export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const baseUrl = siteUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
