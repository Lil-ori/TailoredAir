import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "Why homeowners in Littleton and Denver metro choose Tailored Air: honest pricing, local technicians, American Standard products, and 24/7 emergency service.",
  path: "/why-choose-us",
});

export default function WhyChooseUsPage() {
  return (
    <main className="inner-page">
      <Breadcrumbs items={[{ name: "Why Choose Us", path: "/why-choose-us" }]} />
      <HtmlBlock html={readPageHtml("why-choose-content.html")} />
    </main>
  );
}
