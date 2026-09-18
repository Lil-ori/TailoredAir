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
      "We serve Littleton, CO, Englewood, CO, Highlands Ranch, CO, Ken Caryl, CO, Lakewood, CO, and Centennial, CO, plus Columbine, Southglenn, Westminster, Sheridan, Greenwood Village, and the greater Denver Metro area.",
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
      "Tailored Air serves Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Centennial, Columbine, Southglenn, Westminster, Sheridan, Greenwood Village, and the greater Denver Metro area.",
  },
  {
    question: "Is Tailored Air a licensed HVAC contractor in Colorado?",
    answer:
      "Yes. Tailored Air LLC is fully licensed and insured to perform HVAC work in Colorado and is an authorized American Standard HVAC dealer.",
  },
  {
    question: "How much does HVAC repair cost in Littleton Colorado?",
    answer:
      "HVAC repair costs vary by system type and scope of work. Tailored Air offers free no-obligation estimates with no pressure. Call (720) 296-6008 or visit tailoredair.com to get started.",
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
        logo: `${site}/wp-content/uploads/2024/06/tailored-air-logo-.png`,
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
          { "@type": "City", name: "Southglenn" },
          { "@type": "City", name: "Greenwood Village" },
          { "@type": "City", name: "Westminster" },
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

const SERVICE_PAGE_SCHEMA: Record<
  string,
  {
    type: "Service" | "EmergencyService";
    name: string;
    description: string;
    telephone?: string;
    openingHours?: string;
    areaServed: Record<string, string>[];
    faqs: { question: string; answer: string }[];
  }
> = {
  heating: {
    type: "Service",
    name: "Heating Installation and Repair in Littleton CO",
    description:
      "Expert furnace installation, boiler repair, and heat pump services for homes and businesses in Littleton, CO and the Denver Metro area.",
    areaServed: [
      { "@type": "City", name: "Littleton" },
      { "@type": "City", name: "Highlands Ranch" },
      { "@type": "City", name: "Englewood" },
      { "@type": "City", name: "Lakewood" },
    ],
    faqs: [
      {
        question: "How do I know if my furnace needs repair or replacement in Littleton CO?",
        answer:
          "If your furnace is over 15 years old, requires frequent repairs, or is producing uneven heat, replacement is often more cost-effective. Tailored Air offers free assessments for Littleton homeowners. Call (720) 296-6008.",
      },
      {
        question: "What brands of furnaces does Tailored Air install in Littleton CO?",
        answer:
          "Tailored Air is an authorized American Standard dealer and installs their full line of furnaces and heating systems. We also service all major brands across Littleton and the Denver Metro area.",
      },
      {
        question: "How often should I service my heating system in Littleton Colorado?",
        answer:
          "We recommend an annual furnace tune-up every fall before the heating season begins. Regular maintenance extends the life of your system and prevents costly breakdowns during Colorado winters.",
      },
    ],
  },
  cooling: {
    type: "Service",
    name: "Air Conditioning Installation and Repair in Littleton CO",
    description:
      "Central AC installation, ductless mini-split systems, and AC repair for homes and businesses in Littleton, CO and the Denver Metro area.",
    areaServed: [
      { "@type": "City", name: "Littleton" },
      { "@type": "City", name: "Highlands Ranch" },
      { "@type": "City", name: "Englewood" },
      { "@type": "City", name: "Lakewood" },
    ],
    faqs: [
      {
        question: "How do I know if my AC needs repair or replacement in Littleton CO?",
        answer:
          "If your AC is over 12-15 years old, no longer cooling effectively, or requiring repeated repairs, replacement may be more cost-effective. Tailored Air offers free estimates for Littleton homeowners. Call (720) 296-6008.",
      },
      {
        question: "Does Tailored Air install ductless mini-split systems in Littleton CO?",
        answer:
          "Yes. Tailored Air installs ductless mini-split systems for homes without existing ductwork, room additions, garages, and finished basements across Littleton and the Denver Metro area.",
      },
      {
        question: "When should I schedule an AC tune-up in Littleton Colorado?",
        answer:
          "We recommend scheduling your AC tune-up in the spring before cooling season begins. This ensures your system is ready for Colorado's warm months and catches any issues before they become expensive repairs.",
      },
    ],
  },
  emergency: {
    type: "EmergencyService",
    name: "24/7 Emergency HVAC Repair in Littleton CO",
    description:
      "Around-the-clock emergency heating and cooling repair for homes and businesses across Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, Ken Caryl, and the Denver Metro area.",
    telephone: "+17202966008",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: [{ "@type": "AdministrativeArea", name: "Denver Metro Area, Colorado" }],
    faqs: [
      {
        question: "Does Tailored Air offer 24/7 emergency HVAC repair in Littleton CO?",
        answer:
          "Yes. Tailored Air provides 24/7 emergency HVAC repair for homes and businesses in Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, Ken Caryl, and all surrounding Denver Metro communities. Call (720) 296-6008 anytime.",
      },
      {
        question: "What counts as an HVAC emergency?",
        answer:
          "A no-heat situation in winter, a completely failed AC during extreme heat, a gas leak, or any HVAC issue that poses a safety risk counts as an emergency. Call Tailored Air at (720) 296-6008 immediately.",
      },
      {
        question: "How fast does Tailored Air respond to emergency HVAC calls in Littleton CO?",
        answer:
          "We prioritize emergency calls and aim to respond as quickly as possible, often same-day. Call (720) 296-6008 and we will get a technician to your Littleton home as fast as we can.",
      },
    ],
  },
  "water-heaters": {
    type: "Service",
    name: "Water Heater Installation and Repair in Littleton CO",
    description:
      "Traditional and tankless water heater installation, repair, and maintenance for homes in Littleton, CO and the Denver Metro area.",
    areaServed: [
      { "@type": "City", name: "Littleton" },
      { "@type": "City", name: "Highlands Ranch" },
    ],
    faqs: [
      {
        question: "Should I get a tankless or traditional water heater in Littleton CO?",
        answer:
          "Tankless water heaters provide endless hot water and use less energy but cost more upfront. Traditional tank heaters have a lower initial cost. Tailored Air can assess your home's needs and help you decide. Call (720) 296-6008 for a free estimate.",
      },
      {
        question: "How long do water heaters last in Colorado?",
        answer:
          "Traditional tank water heaters typically last 8-12 years. Tankless water heaters can last 20 years or more with proper maintenance. Annual flushing helps extend the life of your system.",
      },
    ],
  },
  "air-quality": {
    type: "Service",
    name: "Indoor Air Quality Solutions in Littleton CO",
    description:
      "Air purifiers, humidifiers, UV germicidal lamps, and CO detectors for homes and businesses in Littleton, CO and the Denver Metro area.",
    areaServed: [
      { "@type": "City", name: "Littleton" },
      { "@type": "City", name: "Denver" },
    ],
    faqs: [
      {
        question: "Why is indoor air quality important in Colorado homes?",
        answer:
          "Colorado's dry climate and high altitude mean indoor air can be particularly dry and dusty. Littleton homes can also trap allergens, pet dander, and pollutants. Whole-home air quality solutions from Tailored Air help families breathe easier year-round.",
      },
      {
        question: "Does Tailored Air install whole-home humidifiers in Littleton CO?",
        answer:
          "Yes. Tailored Air installs whole-home humidifiers for Littleton homeowners to combat Colorado's dry climate, which can damage wood floors, furniture, and irritate skin and sinuses.",
      },
    ],
  },
  commercial: {
    type: "Service",
    name: "Commercial HVAC Services in Littleton CO",
    description:
      "Commercial HVAC installation, maintenance contracts, and repair for businesses across Littleton, CO and the Denver Metro area.",
    areaServed: [
      { "@type": "City", name: "Littleton" },
      { "@type": "AdministrativeArea", name: "Jefferson County, Colorado" },
    ],
    faqs: [
      {
        question: "Does Tailored Air service commercial HVAC systems in Littleton CO?",
        answer:
          "Yes. Tailored Air provides commercial HVAC installation, repair, and preventative maintenance contracts for businesses across Littleton, Englewood, and the Denver Metro area. Call (720) 296-6008 for a commercial assessment.",
      },
      {
        question: "Does Tailored Air offer commercial HVAC maintenance contracts?",
        answer:
          "Yes. We offer scheduled preventative maintenance agreements for Littleton-area businesses that keep your HVAC systems running reliably year-round and include priority service when repairs are needed.",
      },
    ],
  },
};

const PAGE_FAQ_ITEMS = [
  {
    question: "What areas does Tailored Air serve near Littleton CO?",
    answer:
      "Tailored Air serves Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Centennial, Columbine, Southglenn, Westminster, Sheridan, Greenwood Village, and the greater Denver Metro area.",
  },
  {
    question: "Does Tailored Air offer emergency HVAC service?",
    answer:
      "Yes. Tailored Air provides 24/7 emergency HVAC repair. Call (720) 296-6008 anytime.",
  },
  {
    question: "Are your estimates free?",
    answer:
      "Yes. We offer free no-obligation estimates for all HVAC installation and replacement projects. No pressure, no upselling.",
  },
  {
    question: "What brands do you work with?",
    answer:
      "We are an authorized American Standard dealer and service all major HVAC brands.",
  },
  {
    question: "How often should I service my HVAC system?",
    answer:
      "We recommend a tune-up twice a year, once in spring before cooling season and once in fall before heating season.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Tailored Air LLC is fully licensed and insured to operate in Colorado.",
  },
] as const;

function providerJsonLd(site: string) {
  return {
    "@type": "HVACBusiness",
    name: "Tailored Air",
    telephone: "+17202966008",
    url: site,
  };
}

export function serviceJsonLd(service: { title: string; description: string; slug: string }) {
  const site = getSiteUrl();
  const spec = SERVICE_PAGE_SCHEMA[service.slug];
  if (!spec) {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: SERVICE_OFFERS[service.slug] ?? service.title,
      description: service.description,
      url: `${site}/services/${service.slug}`,
      provider: providerJsonLd(site),
      areaServed: GEO_CITIES.map((name) => ({ "@type": "City", name })),
    };
  }

  const serviceNode = {
    "@type": spec.type,
    name: spec.name,
    description: spec.description,
    url: `${site}/services/${service.slug}`,
    provider: providerJsonLd(site),
    areaServed: spec.areaServed,
    ...(spec.telephone ? { telephone: spec.telephone } : {}),
    ...(spec.openingHours ? { openingHours: spec.openingHours } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "FAQPage",
        mainEntity: faqEntity(spec.faqs),
      },
    ],
  };
}

export function aboutJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Tailored Air, Littleton CO HVAC Company",
    description:
      "Tailored Air LLC is a locally owned HVAC company based in Littleton, Colorado. Founded on honest service, fair pricing, and American Standard products.",
    url: `${site}/about`,
    about: {
      "@type": "HVACBusiness",
      name: "Tailored Air",
      foundingDate: "2023",
      foundingLocation: "Littleton, Colorado",
      description:
        "Locally owned HVAC company in Littleton, CO serving the Denver Metro area with honest, high-quality heating and cooling services.",
    },
  };
}

export function whyChooseUsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntity([
      {
        question: "Why should I choose Tailored Air for HVAC service in Littleton CO?",
        answer:
          "Tailored Air is locally owned and based in Littleton, CO. We have a 5-star Google rating, offer honest pricing with no upselling, are fully licensed and insured in Colorado, and are an authorized American Standard dealer. We treat every home like our own.",
      },
      {
        question: "Is Tailored Air licensed and insured in Colorado?",
        answer:
          "Yes. Tailored Air LLC is fully licensed and insured to perform HVAC work in Colorado. All work is performed to code and to the highest professional standards.",
      },
      {
        question: "Does Tailored Air offer free HVAC estimates in Littleton CO?",
        answer:
          "Yes. Tailored Air offers free no-obligation estimates for all HVAC installation and replacement projects in Littleton and the Denver Metro area. Call (720) 296-6008 or visit tailoredair.com.",
      },
    ]),
  };
}

export function valuesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntity([
      {
        question: "What does SUIT stand for at Tailored Air?",
        answer:
          "SUIT stands for Solve It, Understand, Integrity, and Trust. These four values guide every interaction at Tailored Air, from the first call to the final walk-through on every job in Littleton and the Denver Metro area.",
      },
      {
        question: "What does integrity mean at Tailored Air?",
        answer:
          "At Tailored Air, integrity means doing the right thing every time. No upselling, no hidden fees, no recommending a replacement when a repair will do. We say what we mean and do what we say on every job.",
      },
      {
        question: "What is Tailored Air's approach to customer service?",
        answer:
          "We listen first. We take the time to understand what each customer in Littleton and the Denver Metro area actually needs before recommending anything. The right answer starts with the right question.",
      },
    ]),
  };
}

export function contactJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Tailored Air, HVAC Services in Littleton CO",
    description:
      "Contact Tailored Air LLC for HVAC services in Littleton, CO and the Denver Metro area. Call (720) 296-6008 or email hello@tailoredair.com.",
    url: `${site}/contact`,
    mainEntity: {
      "@type": "HVACBusiness",
      name: "Tailored Air",
      telephone: "+17202966008",
      email: PUBLIC_EMAIL,
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
    },
  };
}

export function careersJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "HVAC Technician, Littleton CO",
    description:
      "Tailored Air is always looking for talented HVAC installers and technicians in the Littleton, CO and Denver Metro area. Send your resume to hello@tailoredair.com.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Tailored Air LLC",
      sameAs: site,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Littleton",
        addressRegion: "CO",
        addressCountry: "US",
      },
    },
    employmentType: "FULL_TIME",
    validThrough: "2027-12-31",
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntity(PAGE_FAQ_ITEMS),
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
