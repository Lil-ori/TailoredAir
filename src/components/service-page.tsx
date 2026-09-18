import type { ServicePage } from "@/lib/services";

function PhoneLink({ className }: { className?: string }) {
  return (
    <a className={className} href="tel:7202966008">
      (720) 296-6008
    </a>
  );
}

export function ServicePageContent({ service }: { service: ServicePage }) {
  const isEmergency = service.slug === "emergency";

  return (
    <div className="subpage-inner">
      <p className="eyebrow">HVAC Services</p>
      <h1>{service.title}</h1>
      {isEmergency ? (
        <div className="service-emergency">
          <p className="service-emergency-serve">
            Serving Littleton, CO, Highlands Ranch, Englewood, Lakewood, Centennial, and Ken Caryl
            24/7
          </p>
          <PhoneLink className="service-emergency-phone" />
        </div>
      ) : null}
      <div className="service-layout-frame">
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
            {isEmergency ? "Need emergency HVAC repair now?" : "Ready to schedule this service?"}
          </p>
          {isEmergency ? (
            <>
              <p style={{ color: "var(--dim)", fontSize: 13, fontWeight: 300, marginBottom: 16 }}>
                Serving Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, and Ken Caryl
                around the clock.
              </p>
              <PhoneLink className="service-emergency-phone" />
            </>
          ) : (
            <p style={{ color: "var(--dim)", fontSize: 13, fontWeight: 300 }}>
              Get a free, no pressure estimate, or call{" "}
              <a href="tel:7202966008">(720) 296-6008</a> for emergencies.
            </p>
          )}
        </div>
        {isEmergency ? (
          <div className="service-emergency-actions">
            <PhoneLink className="btn-dk" />
            <a className="btn-w" href="/contact">
              Get a Free Estimate
            </a>
          </div>
        ) : (
          <a className="btn-w" href="#" data-action="estimate" style={{ flexShrink: 0 }}>
            Get a Free Estimate
          </a>
        )}
      </div>
    </div>
  );
}
