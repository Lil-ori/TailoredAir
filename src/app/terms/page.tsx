import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms of use for tailoredair.com and Tailored Air LLC HVAC services in Littleton, Colorado.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="inner-page">
      <Breadcrumbs items={[{ name: "Terms & Conditions", path: "/terms" }]} />
      <HtmlBlock html={readPageHtml("terms.html")} />
    </main>
  );
}
