import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { privacyJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Tailored Air LLC collects, uses, and protects customer information. We do not sell personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <JsonLd data={privacyJsonLd()} />
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <HtmlBlock html={readPageHtml("privacy.html")} />
    </main>
  );
}
