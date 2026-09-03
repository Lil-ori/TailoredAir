import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(items)} />
      <nav className="crumbs" aria-label="Breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.path}>
                {last ? <span aria-current="page">{item.name}</span> : <a href={item.path}>{item.name}</a>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
