import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
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
      <HtmlBlock html={readPageHtml("careers-content.html")} />
    </main>
  );
}
