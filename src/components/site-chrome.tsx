"use client";

/* Nav and mobile menu only. Footer is src/components/site-footer.tsx — do not paste an older footer here. */

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

export { SiteFooter } from "@/components/site-footer";
