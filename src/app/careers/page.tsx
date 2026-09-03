import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Tailored Air team in Littleton, CO. We are always looking for HVAC installers and technicians who take pride in their work.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Tailored Air",
    description:
      "HVAC careers in Littleton and the Denver metro. Send your resume to hello@tailoredair.com.",
    url: "/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="inner-page">
      <HtmlBlock html={readPageHtml("careers-content.html")} />
    </main>
  );
}
