import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "HVAC tips and news from Tailored Air. Our blog for Littleton and Denver metro homeowners is coming soon.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="inner-page">
      <ComingSoon title="Blog" />
    </main>
  );
}
