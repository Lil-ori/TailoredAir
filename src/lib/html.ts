import { readFileSync } from "node:fs";
import path from "node:path";

export function readPageHtml(name: string) {
  return readFileSync(path.join(process.cwd(), "src/content/pages", name), "utf8");
}
