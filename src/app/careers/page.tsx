import { ComingSoon } from "@/components/coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers",
  description:
    "Join the Tailored Air team in Littleton, CO. HVAC career openings will be posted here.",
  path: "/careers",
  index: false,
});

export default function CareersPage() {
  return (
    <main className="inner-page">
      <ComingSoon title="Careers" />
    </main>
  );
}
