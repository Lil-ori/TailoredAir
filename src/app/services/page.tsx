import { Breadcrumbs } from "@/components/breadcrumbs";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HVAC Services in Littleton, CO",
  description:
    "Heating, cooling, indoor air quality, water heaters, commercial HVAC, and 24/7 emergency repair from Tailored Air in Littleton and the Denver metro area.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="inner-page">
      <Breadcrumbs items={[{ name: "HVAC Services", path: "/services" }]} />
      <HtmlBlock html={readPageHtml("services.html")} />
    </main>
  );
}
