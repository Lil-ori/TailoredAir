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
        <p className="values-lede" style={{ maxWidth: "none", width: "100%" }}>
          {service.lede}
        </p>

        <div className="values-suit">
          <div className="values-suit-photo">
            <img src={service.image} alt={service.imageAlt} loading="lazy" />
          </div>
          <div className="values-suit-list">
            {service.issues.map((issue, index) => (
              <div className="values-suit-item" key={issue.title}>
                <div className="values-suit-top">
                  <span className="values-suit-letter">{index + 1}</span>
                  <span className="values-suit-name">{issue.title}</span>
                </div>
                <p>{issue.detail}</p>
              </div>
            ))}
          </div>
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
          <h2>Other HVAC services</h2>
          <ul className="service-related">
            {related.map((item) => (
              <li key={item.slug}>
                <a href={`/services/${item.slug}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>

        <div className="commit-cta" style={{ marginTop: 64 }}>
          <div>
            <p className="service-cta-title">Need this looked at?</p>
            <p className="service-cta-copy">
              Free estimates. No pressure. Call{" "}
              <a href="tel:7202966008">(720) 296-6008</a> or request a time that works.
            </p>
          </div>
          <a className="btn-w" href="#" data-action="estimate" style={{ flexShrink: 0 }}>
            Get a Free Estimate
          </a>
        </div>
      </div>
    </main>
  );
}
