import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Why homeowners in Littleton and Denver metro choose Tailored Air: honest pricing, local technicians, American Standard products, and 24/7 emergency service.",
  alternates: { canonical: "/why-choose-us" },
};

export default function WhyChooseUsPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("why-choose-content.html")} />
    </main>
  );
}
