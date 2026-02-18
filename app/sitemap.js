export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;
  const baseUrl = siteUrl || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
