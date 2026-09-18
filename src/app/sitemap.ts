import type { MetadataRoute } from "next";
import { publicPages } from "@/lib/public-pages";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  return publicPages.map((page) => ({
    url: `${site}${page.path === "/" ? "/" : page.path}`,
    lastModified: new Date("2026-09-04"),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
