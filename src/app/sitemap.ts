import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

const routes = [
  "",
  "/services",
  ...SERVICES.map((service) => `/services/${service.slug}`),
  "/about",
  "/why-choose-us",
  "/faq",
  "/values",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  return routes.map((route) => ({
    url: `${site}${route || "/"}`,
    lastModified: new Date("2026-09-03"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.7,
  }));
}
