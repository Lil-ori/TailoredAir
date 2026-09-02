import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for tailoredair.com and Tailored Air LLC HVAC services in Littleton, Colorado.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("terms.html")} />
    </main>
  );
}
