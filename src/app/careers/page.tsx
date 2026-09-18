import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { careersJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HVAC Technician Careers in Littleton, CO",
  description:
    "Join the Tailored Air team in Littleton, CO. We are always looking for HVAC installers and technicians who take pride in their work. Send your resume to hello@tailoredair.com.",
  path: "/careers",
  ogTitle: "Careers at Tailored Air",
});

export default function CareersPage() {
  return (
    <main className="inner-page">
      <JsonLd data={careersJsonLd()} />
      <HtmlBlock html={readPageHtml("careers-content.html")} />
    </main>
  );
}
