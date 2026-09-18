import { LOCATION_SERVICE_CARDS, type LocationPage } from "@/lib/locations";
import { getService } from "@/lib/services";

export function LocationPageContent({ location }: { location: LocationPage }) {
  const city = location.city;
  const basedHere = city === "Littleton";

  return (
    <div className="subpage-inner">
      <p className="eyebrow">HVAC Services, {city}, CO</p>
      <h1>HVAC Services in {city}, CO</h1>
      <div className="location-intro">
        <p>{location.intro}</p>
        <p>{location.extra}</p>
      </div>

      <div className="location-svc">
        <p className="eyebrow">What We Do</p>
        <h2>Our HVAC Services</h2>
        <div className="svc-grid" style={{ marginTop: 32 }}>
          {LOCATION_SERVICE_CARDS.map((card, index) => {
            const service = getService(card.slug);
            if (!service) return null;
            return (
              <a className="svc" href={`/services/${card.slug}`} key={card.slug}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="svc-img"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                />
                <div className="svc-body">
                  <div className="svc-n">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{card.title}</h3>
                  <p>{card.blurb}</p>
                </div>
                <span className="svc-arr">↗</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="location-local">
        <div className="location-local-copy">
          <p className="eyebrow">Why {city} Homeowners Choose Tailored Air</p>
          <h2>Your Local HVAC Neighbor</h2>
          <p>{location.localCopy}</p>
        </div>
        <div className="location-local-aside">
          <div className="stat">
            <b>5★</b>
            <span>Google Rating</span>
          </div>
          <div className="stat">
            <b>CO</b>
            <span>Licensed &amp; Insured</span>
          </div>
          <div className="stat">
            <b>AS</b>
            <span>Authorized American Standard dealer</span>
          </div>
          <div className="stat">
            <b>{basedHere ? "HQ" : "Near"}</b>
            <span>
              {basedHere
                ? `Based in Littleton, CO ${location.zip}`
                : "Minutes from Littleton, CO"}
            </span>
          </div>
        </div>
      </div>

      <div className="commit-cta location-cta" style={{ marginTop: 64 }}>
        <div>
          <p className="location-cta-title">Get expert HVAC service in {city}, CO.</p>
          <p className="location-cta-sub">
            Call Tailored Air for a free, no-pressure estimate.
          </p>
          <a className="location-cta-phone" href="tel:7202966008">
            (720) 296-6008
          </a>
        </div>
        <div className="location-cta-actions">
          <a className="btn-dk" href="tel:7202966008">
            (720) 296-6008
          </a>
          <a className="btn-w" href="/contact">
            Get a Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}
