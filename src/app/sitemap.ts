import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/why-choose-us",
  "/faq",
  "/values",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/services/heating",
  "/services/cooling",
  "/services/air-quality",
  "/services/water-heaters",
  "/services/commercial",
  "/services/emergency",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  return routes.map((route) => ({
    url: `${site}${route || "/"}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
