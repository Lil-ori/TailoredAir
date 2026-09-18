import type { Metadata } from "next";
import { services } from "@/lib/services";
import { PUBLIC_EMAIL, getSiteUrl } from "@/lib/site";

export const SITE_NAME = "Tailored Air";
export const DEFAULT_OG_IMAGE = "/images/og.jpg";
export const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/2PU5vhgZRs3mSjiT9";

export const GEO_CITIES = [
  "Littleton",
  "Highlands Ranch",
  "Englewood",
  "Lakewood",
  "Centennial",
  "Ken Caryl",
] as const;

export const SAME_AS = [
  "https://www.facebook.com/people/Tailored-Air/61560839943549/",
  "https://www.instagram.com/tailoredaircolorado",
  GOOGLE_PROFILE_URL,
];

export const FAQ_ITEMS = [
  {
    question: "Who is the best HVAC company in Littleton?",
    answer:
      "Tailored Air is a top-rated locally owned HVAC company in Littleton, Colorado with a 5-star Google rating. We are honest with pricing, never upsell, and serve the entire Denver Metro area.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Littleton, CO, Highlands Ranch, Englewood, Lakewood, Centennial, and Ken Caryl, plus Columbine, Southglenn, Westminster, Sheridan, Greenwood Village, and the greater Denver Metro area.",
  },
  {
    question: "Do you offer emergency HVAC service?",
    answer:
      "Yes. We offer 24/7 emergency HVAC repair in Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, Ken Caryl, and surrounding Denver Metro communities. Call (720) 296-6008 anytime.",
  },
  {
    question: "Are your estimates free?",
    answer:
      "Yes, we offer free no-obligation estimates. Fill out the form on our site or give us a call and we will assess your system and provide an honest quote with no pressure.",
  },
  {
    question: "What brands do you work with?",
    answer:
      "We are an authorized American Standard dealer and work with their full line of heating and cooling products. We also service and repair all major HVAC brands regardless of who installed them.",
  },
  {
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend a tune-up twice a year, once in the spring before cooling season and once in the fall before heating season. Regular maintenance extends the life of your system and keeps your energy bills lower.",
  },
  {
    question: "How long does an HVAC installation take?",
    answer:
      "Most standard residential installations can be completed in a single day. More complex systems or commercial installations may take longer. We will give you a clear timeline before any work begins.",
  },
  {
    question: "How much does HVAC repair cost in Littleton Colorado?",
    answer:
      "HVAC repair costs vary by system type and scope of work. Tailored Air offers free no-obligation estimates with no pressure. Call (720) 296-6008 or visit tailoredair.com to get started.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we work with financing options to help make your HVAC investment more manageable. Contact us directly to discuss what is available for your project.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Tailored Air LLC is fully licensed and insured to perform HVAC work in Colorado and is an authorized American Standard HVAC dealer.",
  },
] as const;

export const GEO_FAQ_ITEMS = [
  {
    question: "Who is the best HVAC company in Littleton Colorado?",
    answer:
      "Tailored Air is a top-rated locally owned HVAC company in Littleton, Colorado with a 5-star Google rating. We are honest with pricing, never upsell, and serve the entire Denver Metro area.",
  },
  {
    question: "What HVAC services does Tailored Air offer in Littleton CO?",
    answer:
      "Tailored Air offers heating installation and repair, air conditioning installation and repair, indoor air quality solutions, water heater installation, commercial HVAC, and 24/7 emergency HVAC repair in Littleton, CO and the Denver Metro area.",
  },
  {
    question: "Does Tailored Air offer emergency HVAC service in Littleton Colorado?",
    answer:
      "Yes. Tailored Air provides 24/7 emergency HVAC repair in Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, Ken Caryl, and all surrounding Denver Metro communities. Call (720) 296-6008 anytime.",
  },
  {
    question: "What areas does Tailored Air serve near Littleton CO?",
    answer:
      "Tailored Air serves Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Centennial, Columbine, Sheridan, Greenwood Village, and the greater Denver Metro area.",
  },
  {
    question: "How much does HVAC repair cost in Littleton Colorado?",
    answer:
      "HVAC repair costs vary by system type and scope of work. Tailored Air offers free no-obligation estimates with no pressure. Call (720) 296-6008 or visit tailoredair.com to get started.",
  },
  {
    question: "Is Tailored Air a licensed HVAC contractor in Colorado?",
    answer:
      "Yes. Tailored Air LLC is fully licensed and insured to perform HVAC work in Colorado and is an authorized American Standard HVAC dealer.",
  },
  {
    question: "Does Tailored Air install American Standard HVAC systems?",
    answer:
      "Yes. Tailored Air is an authorized American Standard HVAC dealer serving Littleton, CO and the Denver Metro area.",
  },
] as const;

const SERVICE_OFFERS: Record<string, string> = {
  heating: "Heating Installation and Repair Littleton CO",
  cooling: "Air Conditioning Installation and Repair Littleton CO",
  "air-quality": "Indoor Air Quality Solutions Denver Metro",
  "water-heaters": "Water Heater Installation and Repair Littleton CO",
  commercial: "Commercial HVAC Littleton CO",
  emergency: "24/7 Emergency HVAC Repair Littleton CO",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  ogTitle?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  ogTitle,
}: PageMetaInput): Metadata {
  const canonical = path || "/";
  return {
    title,
    description,
    robots: { index, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      title: ogTitle ?? title,
      description,
      url: canonical,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Tailored Air HVAC in Littleton and Denver Metro" }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function faqEntity(items: readonly { question: string; answer: string }[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));
}

export function businessJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": `${site}/#business`,
        name: "Tailored Air",
        legalName: "Tailored Air LLC",
        url: site,
        logo: `${site}/images/logo.png`,
        image: `${site}/images/og.jpg`,
        description:
          "Tailored Air LLC is Littleton Colorado's trusted HVAC company providing expert heating, cooling, air quality, water heater, commercial HVAC, and 24/7 emergency repair across Littleton, Englewood, Highlands Ranch, Lakewood, Centennial, Ken Caryl, and the Denver Metro area.",
        slogan: "Doing HVAC Right.",
        foundingDate: "2023",
        telephone: "+17202966008",
        email: PUBLIC_EMAIL,
        priceRange: "$$",
        hasMap: GOOGLE_PROFILE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Littleton",
          addressRegion: "CO",
          postalCode: "80120",
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: 39.6136, longitude: -105.0166 },
        areaServed: [
          { "@type": "City", name: "Littleton", sameAs: "https://en.wikipedia.org/wiki/Littleton,_Colorado" },
          { "@type": "City", name: "Englewood" },
          { "@type": "City", name: "Highlands Ranch" },
          { "@type": "City", name: "Lakewood" },
          { "@type": "City", name: "Ken Caryl" },
          { "@type": "City", name: "Centennial" },
          { "@type": "City", name: "Sheridan" },
          { "@type": "City", name: "Columbine" },
          { "@type": "City", name: "Greenwood Village" },
          { "@type": "City", name: "Denver" },
          { "@type": "AdministrativeArea", name: "Jefferson County, Colorado" },
          { "@type": "AdministrativeArea", name: "Arapahoe County, Colorado" },
          { "@type": "AdministrativeArea", name: "Douglas County, Colorado" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "HVAC Services in Littleton CO",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: SERVICE_OFFERS[service.slug] ?? `${service.title} Littleton CO`,
              url: `${site}/services/${service.slug}`,
            },
          })),
        },
        sameAs: SAME_AS,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "47",
        },
        brand: { "@type": "Brand", name: "American Standard" },
        knowsAbout: [
          "HVAC",
          "Heating",
          "Air Conditioning",
          "Furnace Repair",
          "Heat Pump Installation",
          "Indoor Air Quality",
          "Water Heaters",
          "Commercial HVAC",
          "Emergency HVAC Repair",
          "Littleton Colorado",
          "Denver Metro HVAC",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: "Tailored Air, Littleton CO HVAC Experts",
        publisher: { "@id": `${site}/#business` },
        inLanguage: "en-US",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...items,
    ].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${site}/` : `${site}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: { title: string; description: string; slug: string }) {
  const site = getSiteUrl();
  const isEmergency = service.slug === "emergency";
  return {
    "@context": "https://schema.org",
    "@type": isEmergency ? "EmergencyService" : "Service",
    name: SERVICE_OFFERS[service.slug] ?? service.title,
    description: service.description,
    url: `${site}/services/${service.slug}`,
    provider: { "@id": `${site}/#business` },
    areaServed: GEO_CITIES.map((name) => ({ "@type": "City", name })),
    serviceType: service.title,
    ...(isEmergency ? { openingHours: "Mo-Su 00:00-23:59" } : {}),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntity(FAQ_ITEMS),
  };
}

export function homeFaqJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${site}/#faq`,
    mainEntity: faqEntity(GEO_FAQ_ITEMS),
  };
}
