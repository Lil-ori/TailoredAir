import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

const routes = [
  "",
  ...services.map((service) => `/services/${service.slug}`),
  "/about",
  "/why-choose-us",
  "/faq",
  "/values",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  return routes.map((route) => ({
    url: `${site}${route || "/"}`,
    lastModified: new Date("2026-09-04"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
