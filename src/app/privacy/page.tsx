import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tailored Air LLC collects, uses, and protects customer information. We do not sell personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("privacy.html")} />
    </main>
  );
}
