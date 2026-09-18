import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

export type PublicPage = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

export const publicPages: PublicPage[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: service.slug === "emergency" ? 1 : 0.9,
  })),
  ...locations.map((location) => ({
    path: `/locations/${location.slug}`,
    changeFrequency: "monthly" as const,
    priority: location.priority,
  })),
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/why-choose-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.9 },
  { path: "/values", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];
