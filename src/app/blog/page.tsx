import { ComingSoon } from "@/components/coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "HVAC tips and news from Tailored Air. Our blog for Littleton and Denver metro homeowners is coming soon.",
  path: "/blog",
  index: false,
});

export default function BlogPage() {
  return (
    <main className="inner-page">
      <ComingSoon title="Blog" />
    </main>
  );
}
