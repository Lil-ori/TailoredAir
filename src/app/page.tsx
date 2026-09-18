import { HomeEnhancements } from "@/components/home-enhancements";
import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { homeFaqJsonLd, pageMetadata } from "@/lib/seo";

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
      <JsonLd data={homeFaqJsonLd()} />
      <HtmlBlock html={readPageHtml("home.html")} />
      <HomeEnhancements />
    </main>
  );
}
