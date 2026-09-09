import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | HVAC Questions in Littleton, CO",
  description:
    "Answers about Tailored Air service areas, emergency HVAC repair, free estimates, American Standard equipment, maintenance, financing, and licensing.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <main className="inner-page">
      <JsonLd data={faqJsonLd()} />
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <HtmlBlock html={readPageHtml("faq-content.html")} />
    </main>
  );
}
