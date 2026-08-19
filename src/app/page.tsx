import { readFileSync } from "node:fs";
import path from "node:path";
import { TailoredAirSite } from "@/components/tailored-air-site";

export default function Home() {
  const html = readFileSync(
    path.join(process.cwd(), "src/content/site-body.html"),
    "utf8",
  );

  return <TailoredAirSite html={html} />;
}
