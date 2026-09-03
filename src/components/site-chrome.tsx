"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSiteUi } from "@/components/site-ui";
import { services } from "@/lib/services";

export function SiteNav() {
  const pathname = usePathname();
  const { openEstimate } = useSiteUi();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOn, setNavOn] = useState(false);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      if (current <= 10) {
        setNavHidden(false);
        setNavOn(false);
      } else if (current > lastScroll) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
        setNavOn(true);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `#nav{background:rgba(255,255,255,.12)!important;backdrop-filter:blur(20px)!important;-webkit-backdrop-filter:blur(20px)!important;border-bottom:1px solid rgba(255,255,255,.15)!important}#nav.on{background:rgba(255,255,255,.18)!important;border-color:rgba(255,255,255,.2)!important}` }} />

      <nav id="nav" className={navOn ? "on" : undefined} style={{ transform: navHidden ? "translateY(-100%)" : "translateY(0)" }}>
        <a className="logo" href="/" title="Tailored Air home">
          <img
            src="/images/logo.png"
            alt="Tailored Air"
            style={{ height: 76, width: "auto", display: "block" }}
          />
        </a>
        <ul className="nav-links">
          <li className="dropdown">
            <a
              href="/services/heating"
              className={pathname.startsWith("/services/") ? "is-active" : undefined}
            >
              HVAC Services
            </a>
            <div className="dropdown-menu">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={pathname === `/services/${service.slug}` ? "is-active" : undefined}
                >
                  {service.navLabel}
                </a>
              ))}
            </div>
          </li>
          <li className="dropdown">
            <a href="/about">About</a>
            <div className="dropdown-menu">
              <a href="/about">About Us</a>
              <a href="/why-choose-us">Why Choose Us</a>
              <a href="/faq">FAQ</a>
              <a href="/values">Our Values</a>
              <a href="/blog">Blog</a>
              <a href="/careers">Careers</a>
            </div>
          </li>
          <li>
            <a href="/contact" className={pathname === "/contact" ? "is-active" : undefined}>
              Contact
            </a>
          </li>
        </ul>
        <button
          id="menu-btn"
          type="button"
          className="menu-btn"
          aria-label="Menu"
          onClick={() => {
            setMenuOpen(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <span />
          <span />
          <span />
        </button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className="nav-btn" href="tel:7202966008">
            Emergency Service
          </a>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mobile-menu">
          <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
          <div className="mobile-menu-group">
            <span>HVAC Services</span>
            {services.map((service) => (
              <a key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu}>
                {service.navLabel}
              </a>
            ))}
          </div>
          <a href="/about" onClick={closeMenu}>
            About
          </a>
          <a href="/blog" onClick={closeMenu}>
            Blog
          </a>
          <a href="/contact" onClick={closeMenu}>
            Contact
          </a>
          <a href="tel:7202966008" className="mobile-phone">
            (720) 296-6008
          </a>
          <button
            type="button"
            className="btn-w"
            onClick={() => {
              closeMenu();
              openEstimate();
            }}
          >
            Get a Free Estimate
          </button>
        </div>
      ) : null}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="ft">
        <div className="ft-brand">
          <div className="ft-logo">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="Tailored Air"
                style={{ height: 76, width: "auto", display: "block" }}
              />
            </a>
          </div>
          <p>
            A new standard in heating and cooling, tailored to your home, your business, and
            your life. Honest service, fair pricing, and a team that treats every job like
            it&apos;s our own house on the line.
          </p>
        </div>
        <div className="ft-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#svc">HVAC Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Service Area</h4>
          <ul>
            <li>
              <a href="/#area">Littleton, CO</a>
            </li>
            <li>
              <a href="/#area">Englewood, CO</a>
            </li>
            <li>
              <a href="/#area">Highlands Ranch</a>
            </li>
            <li>
              <a href="/#area">Lakewood, CO</a>
            </li>
            <li>
              <a href="/#area">Denver Metro</a>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Contact Us</h4>
          <div className="ft-phone">(720) 296-6008</div>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/people/Tailored-Air/61560839943549/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tailoredaircolorado"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/2PU5vhgZRs3mSjiT9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src="/images/asset-10-45ea3094a9a8ffa3.svg"
            alt="Proudly Serving American Standard Products"
            style={{ width: 200, height: "auto", display: "block" }}
          />
        </div>
      </div>
      <div className="ft-bot">
        <span>
          © 2026 Tailored Air LLC. All rights reserved.{" "}
          <a href="/privacy" className="legal-link">
            Privacy Policy
          </a>{" "}
          <a href="/terms" className="legal-link">
            Terms &amp; Conditions
          </a>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              fontSize: 9,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.25)",
              fontWeight: 600,
              lineHeight: 1,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Powered By:
          </span>
          <img
            src="/images/asset-11-637ec214f4179f28.png"
            alt="Lilori"
            style={{ width: 42, height: "auto", display: "block", opacity: 0.7, marginBottom: 2 }}
          />
        </div>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,.25)", letterSpacing: ".04em" }}>
          Littleton, CO &amp; Denver Metro Area
        </span>
      </div>
    </footer>
  );
}
