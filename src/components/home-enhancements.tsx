"use client";

import { useEffect } from "react";

export function HomeEnhancements() {
  useEffect(() => {
    const track = document.getElementById("carousel-track");
    const dotsContainer = document.getElementById("carousel-dots");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    if (!track || !dotsContainer || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll<HTMLElement>(".card");
    const total = cards.length;
    let current = 0;
    let autoTimer: number | undefined;

    const visibleCount = () => (window.matchMedia("(max-width: 900px)").matches ? 1 : 3);
    const pageCount = () => Math.max(1, total - visibleCount() + 1);

    const getCardWidth = () => {
      const trackWidth = track.parentElement?.offsetWidth ?? 0;
      return (trackWidth + 1) / visibleCount();
    };

    const goTo = (index: number) => {
      const pages = pageCount();
      current = Math.max(0, Math.min(index, pages - 1));
      track.style.transform = `translateX(-${current * getCardWidth()}px)`;
      dotsContainer.querySelectorAll(".carousel-dot").forEach((d, i) => {
        d.classList.toggle("active", i === current);
      });
    };

    const resetAuto = () => {
      window.clearInterval(autoTimer);
      autoTimer = window.setInterval(() => {
        goTo(current === pageCount() - 1 ? 0 : current + 1);
      }, 5000);
    };

    const rebuildDots = () => {
      dotsContainer.replaceChildren();
      for (let i = 0; i < pageCount(); i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot" + (i === current ? " active" : "");
        dot.setAttribute("aria-label", `Show reviews page ${i + 1}`);
        dot.addEventListener("click", () => {
          goTo(i);
          resetAuto();
        });
        dotsContainer.appendChild(dot);
      }
    };

    const setCardWidths = () => {
      const w = getCardWidth();
      cards.forEach((c) => {
        c.style.minWidth = `${w - 1}px`;
      });
      if (current > pageCount() - 1) current = pageCount() - 1;
      rebuildDots();
      goTo(current);
    };

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
    window.addEventListener("resize", setCardWidths);
    setCardWidths();
    resetAuto();

    return () => {
      window.removeEventListener("resize", setCardWidths);
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      window.clearInterval(autoTimer);
    };
  }, []);

  return null;
}
