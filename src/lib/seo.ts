import type { Metadata } from "next";
import { services } from "@/lib/services";
import { CONTACT_EMAIL, getSiteUrl } from "@/lib/site";

export const SITE_NAME = "Tailored Air";
export const DEFAULT_OG_IMAGE = "/images/og.jpg";
export const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/2PU5vhgZRs3mSjiT9";

export const SERVICE_AREAS = [
  "Littleton, CO",
  "Englewood, CO",
  "Highlands Ranch, CO",
  "Ken Caryl, CO",
  "Lakewood, CO",
  "Columbine, CO",
  "Southglenn, CO",
  "Westminster, CO",
  "Centennial, CO",
  "Sheridan, CO",
  "Greenwood Village, CO",
  "Denver, CO",
] as const;

export const SAME_AS = [
  "https://www.facebook.com/people/Tailored-Air/61560839943549/",
  "https://www.instagram.com/tailoredaircolorado",
  GOOGLE_PROFILE_URL,
];

export const FAQ_ITEMS = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Columbine, Southglenn, Westminster, Centennial, Sheridan, Greenwood Village, and the greater Denver metro area.",
  },
  {
    question: "Do you offer emergency HVAC service?",
    answer:
      "Yes, we offer 24/7 emergency HVAC repair. If your heating or cooling system fails outside of business hours, call us at (720) 296-6008 and we will get someone out to you as fast as possible.",
  },
  {
    question: "Are your estimates free?",
    answer:
      "Yes, we offer free no-obligation estimates. Fill out the form on our site or give us a call and we will assess your system and provide an honest quote with no pressure.",
  },
  {
    question: "What brands do you work with?",
    answer:
      "We are a proud American Standard partner and work with their full line of heating and cooling products. We also service and repair all major HVAC brands regardless of who installed them.",
  },
  {
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend a tune-up twice a year — once in the spring before cooling season and once in the fall before heating season. Regular maintenance extends the life of your system and keeps your energy bills lower.",
  },
  {
    question: "How long does an HVAC installation take?",
    answer:
      "Most standard residential installations can be completed in a single day. More complex systems or commercial installations may take longer. We will give you a clear timeline before any work begins.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we work with financing options to help make your HVAC investment more manageable. Contact us directly to discuss what is available for your project.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. Tailored Air is fully licensed and insured to operate in Colorado. You can have full confidence that all work is performed to code and to the highest professional standards.",
  },
] as const;

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

export function businessJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HVACBusiness",
        "@id": `${site}/#business`,
        name: SITE_NAME,
        legalName: "Tailored Air LLC",
        url: site,
        logo: `${site}/images/logo.png`,
        image: `${site}/images/og.jpg`,
        telephone: "+17202966008",
        email: CONTACT_EMAIL,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Littleton",
          addressRegion: "CO",
          addressCountry: "US",
        },
        areaServed: SERVICE_AREAS.map((name) => ({
          "@type": "City",
          name,
        })),
        sameAs: SAME_AS,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "HVAC Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${site}/services/${service.slug}`,
              areaServed: "Littleton, CO and Denver metro",
            },
          })),
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          ratingCount: "47",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: SITE_NAME,
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
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${site}/services/${service.slug}`,
    provider: { "@id": `${site}/#business` },
    areaServed: "Littleton, CO and Denver metro",
    serviceType: service.title,
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
