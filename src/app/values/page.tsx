import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { valuesFaqJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Values",
  description:
    "SUIT: Solve It, Understand, Integrity, and Trust. The values behind every Tailored Air HVAC call in Littleton and the Denver metro area.",
  path: "/values",
});

export default function ValuesPage() {
  return (
    <main className="inner-page">
      <JsonLd data={{ "@context": "https://schema.org", ...valuesFaqJsonLd() }} />
      <HtmlBlock html={readPageHtml("values-content.html")} />
    </main>
  );
}
