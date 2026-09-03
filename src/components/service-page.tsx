import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import type { ServicePage } from "@/lib/services";
import { relatedServices } from "@/lib/services";
import { serviceJsonLd } from "@/lib/seo";

export function ServicePageView({ service }: { service: ServicePage }) {
  const related = relatedServices(service.slug);

  return (
    <main className="inner-page">
      <JsonLd data={serviceJsonLd(service)} />
      <Breadcrumbs
        items={[
          { name: "HVAC Services", path: "/services" },
          { name: service.shortName, path: `/services/${service.slug}` },
        ]}
      />
      <div className="subpage-inner service-page">
        <p className="eyebrow">{service.eyebrow}</p>
        <h1>{service.h1}</h1>
        <p className="service-lede">{service.lede}</p>

        <div className="service-hero">
          <img src={service.image} alt={service.imageAlt} />
        </div>

        {service.sections.map((section) => (
          <section className="service-block" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}

        <section className="service-block">
          <h2>Common calls</h2>
          <div className="service-issues">
            {service.issues.map((issue) => (
              <div className="service-issue" key={issue.title}>
                <h3>{issue.title}</h3>
                <p>{issue.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="service-block">
          <h2>Other HVAC services</h2>
          <ul className="service-related">
            {related.map((item) => (
              <li key={item.slug}>
                <a href={`/services/${item.slug}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <div className="commit-cta">
          <div>
            <p className="service-cta-title">Need this looked at?</p>
            <p className="service-cta-copy">
              Free estimates. No pressure. Call{" "}
              <a href="tel:7202966008">(720) 296-6008</a> or request a time that works.
            </p>
          </div>
          <a className="btn-w" href="#" data-action="estimate">
            Get a Free Estimate
          </a>
        </div>
      </div>
    </main>
  );
}
