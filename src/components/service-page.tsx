import type { ServicePage } from "@/lib/services";

export function ServicePageContent({ service }: { service: ServicePage }) {
  return (
    <div className="subpage-inner">
      <p className="eyebrow">HVAC Services</p>
      <h2>{service.title}</h2>
      <div className="service-layout">
        <div className="service-layout-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt={service.imageAlt} />
        </div>
        <div className="service-layout-list">
          <div className="service-layout-item service-layout-intro">
            <p>{service.intro}</p>
          </div>
          {service.points.map((point) => (
            <div className="service-layout-item" key={point.title}>
              <div className="values-suit-top">
                <span className="service-layout-name">{point.title}</span>
              </div>
              <p>{point.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="commit-cta" style={{ marginTop: 64 }}>
        <div>
          <p
            style={{
              fontFamily: "var(--f)",
              fontSize: 18,
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: 6,
            }}
          >
            Ready to schedule this service?
          </p>
          <p style={{ color: "var(--dim)", fontSize: 13, fontWeight: 300 }}>
            Get a free, no pressure estimate, or call (720) 296-6008 for emergencies.
          </p>
        </div>
        <a className="btn-w" href="#" data-action="estimate" style={{ flexShrink: 0 }}>
          Get a Free Estimate
        </a>
      </div>
    </div>
  );
}
