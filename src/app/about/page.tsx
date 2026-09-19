import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { aboutFaqJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us | Littleton HVAC Company",
  description:
    "Meet Tailored Air, a locally owned HVAC company in Littleton, CO. Honest quotes, American Standard products, and a team that treats your home like its own.",
  path: "/about",
  ogTitle: "About Tailored Air",
});

export default function AboutPage() {
  return (
    <main className="inner-page">
      <JsonLd data={{ "@context": "https://schema.org", ...aboutFaqJsonLd() }} />
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />
      <HtmlBlock html={readPageHtml("about-us-content.html")} />
    </main>
  );
}
