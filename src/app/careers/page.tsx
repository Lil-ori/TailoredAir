import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { careersFaqJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the Tailored Air team in Littleton, CO. We are always looking for HVAC installers and technicians who take pride in their work.",
  path: "/careers",
  ogTitle: "Careers at Tailored Air",
});

export default function CareersPage() {
  return (
    <main className="inner-page">
      <JsonLd data={{ "@context": "https://schema.org", ...careersFaqJsonLd() }} />
      <HtmlBlock html={readPageHtml("careers-content.html")} />
    </main>
  );
}
