import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Tailored Air team in Littleton, CO. HVAC career openings will be posted here.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <main className="inner-page">
      <ComingSoon title="Careers" />
    </main>
  );
}
