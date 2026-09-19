import { HomeEnhancements } from "@/components/home-enhancements";
import { HtmlBlock } from "@/components/html-block";
import { JsonLd } from "@/components/json-ld";
import { readPageHtml } from "@/lib/html";
import { homeFaqJsonLd } from "@/lib/page-faq";
import { pageMetadata } from "@/lib/seo";

const HOME_TITLE = "Tailored Air | HVAC Services in Littleton, CO";
const HOME_DESCRIPTION =
  "Tailored Air provides expert HVAC installation, repair, and 24/7 emergency service in Littleton, CO and the Denver Metro area. Call (720) 296-6008 today.";

export const metadata = {
  ...pageMetadata({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/",
    ogTitle: HOME_TITLE,
  }),
  title: {
    absolute: HOME_TITLE,
  },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={{ "@context": "https://schema.org", ...homeFaqJsonLd() }} />
      <HtmlBlock html={readPageHtml("home.html")} />
      <HomeEnhancements />
    </main>
  );
}
