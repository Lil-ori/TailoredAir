import { JsonLd } from "@/components/json-ld";
import { ServicePageContent } from "@/components/service-page";
import { getService, services } from "@/lib/services";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} | HVAC in Littleton, CO`,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="inner-page">
      <JsonLd data={serviceJsonLd(service)} />
      <ServicePageContent service={service} />
    </main>
  );
}
