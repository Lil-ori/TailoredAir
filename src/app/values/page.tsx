import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Values",
  description:
    "SUIT — Step-Up, Unity, Integrity, and Trust. The values behind every Tailored Air HVAC call in Littleton and the Denver metro area.",
  alternates: { canonical: "/values" },
};

export default function ValuesPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("values-content.html")} />
    </main>
  );
}
