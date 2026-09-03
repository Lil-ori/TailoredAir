"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
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
            <Link
              href="/services/heating"
              className={pathname.startsWith("/services/") ? "is-active" : undefined}
            >
              HVAC Services
            </Link>
            <div className="dropdown-menu">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className={pathname === `/services/${service.slug}` ? "is-active" : undefined}
                >
                  {service.navLabel}
                </Link>
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
              <Link key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu}>
                {service.navLabel}
              </Link>
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tailoredaircolorado"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/2PU5vhgZRs3mSjiT9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
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
