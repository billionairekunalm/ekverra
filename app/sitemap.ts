import type { MetadataRoute } from "next";

const site = process.env.SITE_URL || "http://localhost:3100";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
