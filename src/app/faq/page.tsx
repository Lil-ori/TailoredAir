import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | HVAC Questions in Littleton, CO",
  description:
    "Answers about Tailored Air service areas, emergency HVAC repair, free estimates, American Standard equipment, maintenance, financing, and licensing.",
  alternates: { canonical: "/faq" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Columbine, Southglenn, Westminster, Centennial, Sheridan, Greenwood Village, and the greater Denver metro area.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer emergency HVAC service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer 24/7 emergency HVAC repair. If your heating or cooling system fails outside of business hours, call us at (720) 296-6008.",
      },
    },
    {
      "@type": "Question",
      name: "Are your estimates free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer free no-obligation estimates with no pressure.",
      },
    },
    {
      "@type": "Question",
      name: "What brands do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are an American Standard partner and also service and repair all major HVAC brands.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I service my HVAC system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend a tune-up twice a year — once in the spring before cooling season and once in the fall before heating season.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an HVAC installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most standard residential installations can be completed in a single day. More complex or commercial work may take longer.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer financing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we work with financing options to help make HVAC investment more manageable.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Tailored Air is fully licensed and insured to operate in Colorado.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <main className="inner-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HtmlBlock html={readPageHtml("faq-content.html")} />
    </main>
  );
}
