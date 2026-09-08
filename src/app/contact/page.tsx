import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, text, or email Tailored Air in Littleton, CO. (720) 296-6008. solutions@tailoredair.com. 24/7 emergency HVAC service for the Denver metro area.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("contact.html")} />
    </main>
  );
}
