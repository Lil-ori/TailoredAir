import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
