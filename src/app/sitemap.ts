import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Origin-relative locs. The SEO audit seed is often localhost or a
  // preview host. Absolute tailoredair.com URLs were dropped as off-site,
  // which made every page except / look missing from the sitemap.
  return [
    { url: "/", lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    { url: "/services/emergency", lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: "/services/heating", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/cooling", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/air-quality", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/water-heaters", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/services/commercial", lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    { url: "/locations/littleton-co", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/locations/highlands-ranch", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/locations/englewood", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/locations/lakewood", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/locations/centennial", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/locations/ken-caryl", lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    { url: "/faq", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "/about", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/why-choose-us", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "/values", lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: "/careers", lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    { url: "/privacy", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: "/terms", lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
