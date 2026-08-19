"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    openPage: (id: string) => void;
    closePage: (id: string) => void;
    openAboutPage: (tab: string) => void;
    showTab: (id: string) => void;
    openSchedule: () => void;
    openEstimate: () => void;
    closeScheduleLightbox: () => void;
    closeSchedule: (e: MouseEvent) => void;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
  }
}

export function TailoredAirSite({ html }: { html: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = document.getElementById("nav");
    let lastScroll = 0;

    function openPage(id: string) {
      document.getElementById(id)?.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closePage(id: string) {
      document.getElementById(id)?.classList.remove("open");
      document.body.style.overflow = "";
    }

    function showTab(id: string) {
      document.querySelectorAll(".subpage-content").forEach((el) => el.classList.remove("active"));
      document.querySelectorAll(".subpage-tab").forEach((t) => t.classList.remove("active"));
      document.getElementById(id)?.classList.add("active");
      const map: Record<string, string> = {
        "about-us-content": "tab-about-us",
        "why-choose-content": "tab-why-choose",
        "faq-content": "tab-faq",
        "values-content": "tab-values",
      };
      if (map[id]) document.getElementById(map[id])?.classList.add("active");
    }

    function openAboutPage(tab: string) {
      document.getElementById("about-page")?.classList.add("open");
      document.body.style.overflow = "hidden";
      showTab(tab);
    }

    function openSchedule() {
      const eyebrow = document.getElementById("lightbox-eyebrow");
      const title = document.getElementById("lightbox-title");
      const subtitle = document.getElementById("lightbox-subtitle");
      if (eyebrow) eyebrow.textContent = "Get In Touch";
      if (title) title.textContent = "Schedule a Service";
      if (subtitle) {
        subtitle.textContent =
          "Fill out the form below and we'll be in touch within one business day.";
      }
      document.getElementById("schedule-lightbox")?.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function openEstimate() {
      const eyebrow = document.getElementById("lightbox-eyebrow");
      const title = document.getElementById("lightbox-title");
      const subtitle = document.getElementById("lightbox-subtitle");
      if (eyebrow) eyebrow.textContent = "Free Estimate";
      if (title) title.textContent = "Get a Free Estimate";
      if (subtitle) {
        subtitle.textContent =
          "Tell us about your project and we'll get back to you with a no-obligation estimate.";
      }
      document.getElementById("schedule-lightbox")?.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeScheduleLightbox() {
      document.getElementById("schedule-lightbox")?.classList.remove("open");
      document.body.style.overflow = "";
    }

    function openMobileMenu() {
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.style.display = "flex";
      document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
      const menu = document.getElementById("mobile-menu");
      if (menu) menu.style.display = "none";
      document.body.style.overflow = "";
    }

    function closeSchedule(e: MouseEvent) {
      if (e.target === document.getElementById("schedule-lightbox")) {
        closeScheduleLightbox();
      }
    }

    window.openPage = openPage;
    window.closePage = closePage;
    window.openAboutPage = openAboutPage;
    window.showTab = showTab;
    window.openSchedule = openSchedule;
    window.openEstimate = openEstimate;
    window.closeScheduleLightbox = closeScheduleLightbox;
    window.closeSchedule = closeSchedule;
    window.openMobileMenu = openMobileMenu;
    window.closeMobileMenu = closeMobileMenu;

    const menuBtn = document.getElementById("menu-btn");
    menuBtn?.addEventListener("click", openMobileMenu);

    const onFaqClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest(".faq-q");
      if (!btn) return;
      const item = btn.closest(".faq-item");
      const list = item?.closest(".faq-list");
      if (!item || !list) return;
      const isOpen = item.classList.contains("open");
      list.querySelectorAll(".faq-item.open").forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    };
    document.addEventListener("click", onFaqClick);

    const onScroll = () => {
      if (!nav) return;
      const current = window.scrollY;
      if (current <= 10) {
        nav.style.transform = "translateY(0)";
        nav.classList.remove("on");
      } else if (current > lastScroll) {
        nav.style.transform = "translateY(-100%)";
      } else {
        nav.style.transform = "translateY(0)";
        nav.classList.add("on");
      }
      lastScroll = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const track = document.getElementById("carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let autoTimer: number | undefined;
    let resizeHandler: (() => void) | undefined;

    if (track && dotsContainer && prevBtn && nextBtn) {
      const cards = track.querySelectorAll<HTMLElement>(".card");
      const total = cards.length;
      const visible = window.matchMedia("(max-width: 900px)").matches ? 1 : 3;
      const pages = Math.max(1, total - visible + 1);
      let current = 0;

      const getCardWidth = () => {
        const parent = track.parentElement;
        const trackWidth = parent?.offsetWidth ?? 0;
        return (trackWidth + 1) / visible;
      };

      const goTo = (index: number) => {
        current = Math.max(0, Math.min(index, pages - 1));
        const offset = current * getCardWidth();
        track.style.transform = `translateX(-${offset}px)`;
        document.querySelectorAll(".carousel-dot").forEach((d, i) => {
          d.classList.toggle("active", i === current);
        });
      };

      const resetAuto = () => {
        window.clearInterval(autoTimer);
        autoTimer = window.setInterval(() => {
          goTo(current === pages - 1 ? 0 : current + 1);
        }, 5000);
      };

      dotsContainer.replaceChildren();
      for (let i = 0; i < pages; i++) {
        const dot = document.createElement("div");
        dot.className = "carousel-dot" + (i === 0 ? " active" : "");
        dot.addEventListener("click", () => {
          goTo(i);
          resetAuto();
        });
        dotsContainer.appendChild(dot);
      }

      const onPrev = () => {
        goTo(current - 1);
        resetAuto();
      };
      const onNext = () => {
        goTo(current + 1);
        resetAuto();
      };
      prevBtn.addEventListener("click", onPrev);
      nextBtn.addEventListener("click", onNext);

      const setCardWidths = () => {
        const w = getCardWidth();
        cards.forEach((c) => {
          c.style.minWidth = `${w - 1}px`;
        });
        goTo(current);
      };

      resizeHandler = setCardWidths;
      setCardWidths();
      window.addEventListener("resize", setCardWidths);
      resetAuto();
    }

    const onSubmit = (e: Event) => {
      const button = (e.target as HTMLElement | null)?.closest(".form-submit");
      if (!button || !button.textContent?.includes("Request a Callback")) return;
      e.preventDefault();
      const lightbox = document.getElementById("schedule-lightbox");
      const formRoot = lightbox?.querySelector(".lightbox");
      if (!formRoot) return;
      formRoot.innerHTML = `
        <button class="lightbox-close" onclick="closeScheduleLightbox()">✕</button>
        <p class="eyebrow" style="margin-bottom:10px">Request received</p>
        <h3>We'll call you back</h3>
        <p>Thanks for reaching out to Tailored Air. A teammate will contact you within one business day. For emergencies, call (720) 296-6008 anytime.</p>
        <button class="form-submit" type="button" onclick="closeScheduleLightbox()">Close</button>
      `;
    };
    document.addEventListener("click", onSubmit);

    return () => {
      menuBtn?.removeEventListener("click", openMobileMenu);
      document.removeEventListener("click", onFaqClick);
      document.removeEventListener("click", onSubmit);
      window.removeEventListener("scroll", onScroll);
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (autoTimer) window.clearInterval(autoTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="ta-root"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
