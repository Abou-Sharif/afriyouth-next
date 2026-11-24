import type { MetadataRoute } from "next";
import { pagePaths, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pagePaths.map((path) => ({ url: `${siteUrl}${path}` }));
}
