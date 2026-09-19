import Link from "next/link";
import { LOCATION_SERVICE_CARDS, type LocationPage } from "@/lib/locations";

export function LocationPageContent({ location }: { location: LocationPage }) {
  const city = location.city;

  return (
    <div className="subpage-inner">
      <p className="eyebrow">HVAC Services, {city}, CO</p>
      <h1>HVAC Services in {city}, CO</h1>
      <p className="location-intro">{location.intro}</p>
      <p className="location-intro-extra">{location.extra}</p>

      <div className="location-svc">
        <p className="eyebrow">What We Do</p>
        <h2>HVAC Services in {city}, CO</h2>
        <div className="location-svc-list">
          {LOCATION_SERVICE_CARDS.map((card) => (
            <Link className="location-svc-item" href={`/services/${card.slug}`} key={card.slug}>
              <span className="location-svc-check" aria-hidden="true">
                ✓
              </span>
              <span className="location-svc-copy">
                <span className="location-svc-name">{card.title}</span>
                <span className="location-svc-blurb">{card.blurb}</span>
              </span>
            </Link>
          ))}
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
            <b>Licensed</b>
            <span>&amp; Insured in Colorado</span>
          </div>
          <div className="stat">
            <b>American Standard</b>
            <span>Authorized Dealer</span>
          </div>
          <div className="stat">
            <b>Local</b>
            <span>Based in Littleton, CO</span>
          </div>
          <div className="stat">
            <b>Free</b>
            <span>No-Obligation Estimates</span>
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
          <Link className="btn-w" href="/contact">
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </div>
  );
}
