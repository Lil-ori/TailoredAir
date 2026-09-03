import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
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
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <HtmlBlock html={readPageHtml("contact.html")} />
    </main>
  );
}
