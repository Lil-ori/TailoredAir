import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tailoredair.com";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services/emergency`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services/heating`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/cooling`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/air-quality`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/water-heaters`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations/littleton-co`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations/highlands-ranch`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/englewood`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/lakewood`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/centennial`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/locations/ken-caryl`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/why-choose-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/values`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
