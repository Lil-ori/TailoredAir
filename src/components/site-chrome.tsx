"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSiteUi } from "@/components/site-ui";

export function SiteNav() {
  const pathname = usePathname();
  const { openEstimate } = useSiteUi();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOn, setNavOn] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

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

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `#nav{background:rgba(255,255,255,.12)!important;backdrop-filter:blur(20px)!important;-webkit-backdrop-filter:blur(20px)!important;border-bottom:1px solid rgba(255,255,255,.15)!important}#nav.on{background:rgba(255,255,255,.18)!important;border-color:rgba(255,255,255,.2)!important}` }} />

      <nav id="nav" className={navOn ? "on" : undefined} style={{ transform: navHidden ? "translateY(-100%)" : "translateY(0)" }}>
        <Link className="logo" href="/" title="Tailored Air home">
          <img
            src="/images/logo.png"
            alt="Tailored Air"
            style={{ height: 76, width: "auto", display: "block" }}
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/#svc">HVAC Services</Link>
          </li>
          <li className="dropdown">
            <Link href="/about">About</Link>
            <div className="dropdown-menu">
              <Link href="/about">About Us</Link>
              <Link href="/why-choose-us">Why Choose Us</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/values">Our Values</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/careers">Careers</Link>
            </div>
          </li>
          <li>
            <Link href="/#rev">Reviews</Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === "/contact" ? "is-active" : undefined}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          id="menu-btn"
          type="button"
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(true);
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
          <Link href="/#svc" onClick={closeMenu}>
            HVAC Services
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <Link href="/#rev" onClick={closeMenu}>
            Reviews
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
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
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Tailored Air"
                style={{ height: 76, width: "auto", display: "block" }}
              />
            </Link>
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#svc">HVAC Services</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Service Area</h4>
          <ul>
            <li>
              <Link href="/#area">Littleton, CO</Link>
            </li>
            <li>
              <Link href="/#area">Englewood, CO</Link>
            </li>
            <li>
              <Link href="/#area">Highlands Ranch</Link>
            </li>
            <li>
              <Link href="/#area">Lakewood, CO</Link>
            </li>
            <li>
              <Link href="/#area">Denver Metro</Link>
            </li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Contact Us</h4>
          <div className="ft-phone">
            <a href="tel:7202966008">(720) 296-6008</a>
          </div>
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
          <Link href="/privacy" className="legal-link">
            Privacy Policy
          </Link>{" "}
          <Link href="/terms" className="legal-link">
            Terms &amp; Conditions
          </Link>
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
