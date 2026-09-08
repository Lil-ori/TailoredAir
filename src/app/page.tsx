import { HomeEnhancements } from "@/components/home-enhancements";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Littleton HVAC Experts | Heating, Cooling & Air Quality",
    description:
      "Tailored Air provides expert HVAC installation, repair & maintenance in Littleton, CO and the Denver Metro area. American Standard partner. 24/7 emergency service. Call (720) 296-6008.",
    path: "/",
    ogTitle: "Tailored Air | Littleton HVAC Experts",
  }),
  title: {
    absolute: "Tailored Air | Littleton HVAC Experts | Heating, Cooling & Air Quality",
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
