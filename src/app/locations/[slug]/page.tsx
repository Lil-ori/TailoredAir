import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { LocationPageContent } from "@/components/location-page";
import { getLocation, locationJsonLd, locations } from "@/lib/locations";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return {
    ...pageMetadata({
      title: `HVAC Services in ${location.city}, CO`,
      description: location.meta,
      path: `/locations/${location.slug}`,
      ogTitle: location.title,
    }),
    title: { absolute: location.title },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return (
    <main className="inner-page">
      <JsonLd data={locationJsonLd(location)} />
      <Breadcrumbs
        items={[{ name: `${location.city} HVAC`, path: `/locations/${location.slug}` }]}
      />
      <LocationPageContent location={location} />
    </main>
  );
}
