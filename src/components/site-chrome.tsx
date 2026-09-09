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
  const [hvacMenuLocked, setHvacMenuLocked] = useState(false);

  useEffect(() => {
    setNavHidden(false);
    setHvacMenuLocked(false);
    setMenuOpen(false);
    document.body.style.overflow = "";
    setNavOn(window.scrollY > 10);
  }, [pathname]);

  useEffect(() => {
    let lastScroll = window.scrollY;

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
  }, [pathname]);

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
          <li
            className={hvacMenuLocked ? "dropdown dropdown-closed" : "dropdown"}
            onMouseLeave={() => setHvacMenuLocked(false)}
          >
            <a
              href="/#svc"
              onClick={() => {
                setHvacMenuLocked(true);
              }}
            >
              HVAC Services
            </a>
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
            <a href="/#svc" onClick={closeMenu}>
              HVAC Services
            </a>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu}>
                {service.navLabel}
              </Link>
            ))}
          </div>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/blog" onClick={closeMenu}>
            Blog
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

export { SiteFooter } from "@/components/site-footer";
