import type { MetadataRoute } from "next";

const site = process.env.SITE_URL || "http://localhost:3100";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${site}/sitemap.xml` };
}
