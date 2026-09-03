import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
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
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <HtmlBlock html={readPageHtml("privacy.html")} />
    </main>
  );
}
