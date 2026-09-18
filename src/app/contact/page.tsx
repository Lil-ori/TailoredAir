import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { contactJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Tailored Air, HVAC Services in Littleton CO",
  description:
    "Contact Tailored Air LLC for HVAC services in Littleton, CO and the Denver Metro area. Call (720) 296-6008 or email hello@tailoredair.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="inner-page">
      <JsonLd data={contactJsonLd()} />
      <HtmlBlock html={readPageHtml("contact.html")} />
    </main>
  );
}
