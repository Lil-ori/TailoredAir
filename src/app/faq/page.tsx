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
        text: "Yes, we offer 24/7 emergency HVAC repair. Call (720) 296-6008 anytime.",
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
