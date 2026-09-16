import { HomeEnhancements } from "@/components/home-enhancements";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Littleton HVAC Heating & Cooling | Tailored Air",
    description:
      "Trusted HVAC repair, installation, and maintenance in Littleton and the Denver Metro area. Tailored Air delivers honest service and year-round comfort.",
    path: "/",
    ogTitle: "Tailored Air | Littleton HVAC Experts",
  }),
  title: {
    absolute: "Littleton HVAC Heating & Cooling | Tailored Air",
  },
};

export default function Home() {
  return (
    <main>
      <HtmlBlock html={readPageHtml("home.html")} />
      <HomeEnhancements />
    </main>
  );
}
