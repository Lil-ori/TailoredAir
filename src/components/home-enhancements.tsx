"use client";

import { useEffect } from "react";

export function HomeEnhancements() {
  useEffect(() => {
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

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (autoTimer) window.clearInterval(autoTimer);
    };
  }, []);

  return null;
}
