"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * One scroll-motion system for the whole page, driven by data attributes:
 *  data-reveal        fade + rise          (data-delay="0.1")
 *  data-split         headline .ln lines rise in sequence
 *  data-clip          image mask reveal from bottom (inner <img> settles from 1.2 scale)
 *  data-line          gold rule draws left → right
 *  data-parallax="n"  yPercent drift while scrolling (n = amount, negative = up)
 *  data-expand        framed image opens to full-bleed while scrolling
 * Initial hidden states live in globals.css under html.motion, so no-JS / reduced-motion users see everything.
 */
export default function Motion() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const once = (el: Element, start = "top 88%") => ({ trigger: el, start, once: true });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
        gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: Number(el.dataset.delay || 0), scrollTrigger: once(el) }),
      );

      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) =>
        gsap.to(el.querySelectorAll(".ln > span"), { yPercent: 0, y: 0, duration: 1.3, ease: "expo.out", stagger: 0.11, scrollTrigger: once(el) }),
      );

      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: once(el, "top 85%") });
        tl.fromTo(el, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" });
        const img = el.querySelector("img");
        if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 2, ease: "expo.out" }, 0.15);
      });

      gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) =>
        gsap.to(el, { scaleX: 1, duration: 1.6, ease: "expo.inOut", scrollTrigger: once(el, "top 92%") }),
      );

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
        gsap.fromTo(el, { yPercent: -Number(el.dataset.parallax || 8) }, {
          yPercent: Number(el.dataset.parallax || 8), ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        }),
      );

      gsap.utils.toArray<HTMLElement>("[data-expand]").forEach((el) =>
        gsap.fromTo(el, { clipPath: "inset(0% 14% 0% 14%)" }, {
          clipPath: "inset(0% 0% 0% 0%)", ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "center 55%", scrub: true },
        }),
      );

      // Process timeline: gold line fills as the steps scroll through.
      const fill = document.querySelector<HTMLElement>(".proc__fill");
      if (fill) {
        const vertical = matchMedia("(max-width: 900px)").matches;
        gsap.to(fill, {
          [vertical ? "scaleY" : "scaleX"]: 1, ease: "none",
          scrollTrigger: { trigger: ".proc__list", start: "top 75%", end: vertical ? "bottom 60%" : "top 25%", scrub: true },
        });
      }
    });

    // Fonts/images can shift layout after first measure.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    return () => {
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return null;
}
