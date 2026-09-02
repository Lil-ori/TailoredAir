import { HomeEnhancements } from "@/components/home-enhancements";
import { HtmlBlock } from "@/components/html-block";
import { readPageHtml } from "@/lib/html";

export default function Home() {
  return (
    <main>
      <HtmlBlock html={readPageHtml("home.html")} />
      <HomeEnhancements />
    </main>
  );
}
