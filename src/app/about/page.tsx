import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Littleton HVAC Company",
  description:
    "Meet Tailored Air, a locally owned HVAC company in Littleton, CO. Honest quotes, American Standard products, and a team that treats your home like its own.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Tailored Air",
    description:
      "A Littleton-owned HVAC company built on honest quotes, quality workmanship, and American Standard equipment.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("about-us-content.html")} />
    </main>
  );
}
