import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { contactFaqJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Call, text, or email Tailored Air in Littleton, CO. (720) 296-6008. hello@tailoredair.com. 24/7 emergency HVAC service for the Denver metro area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="inner-page">
      <JsonLd data={{ "@context": "https://schema.org", ...contactFaqJsonLd() }} />
      <HtmlBlock html={readPageHtml("contact.html")} />
    </main>
  );
}
