import type { MetadataRoute } from "next";
import { publicPages } from "@/lib/public-pages";
import { getRequestOrigin } from "@/lib/request-origin";
import { absoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await getRequestOrigin();
  const lastModified = new Date();

  return publicPages.map((page) => ({
    url: absoluteUrl(page.path, origin),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
