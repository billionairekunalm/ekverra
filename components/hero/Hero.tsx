"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current!;
    const mm = gsap.matchMedia();

    // The entrance sequence is pure CSS (globals.css, "Hero entrance") so it starts on first paint,
    // not after hydration. GSAP only handles the scroll-linked drift.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(el);
      gsap.to(q(".hero__par"), { yPercent: 14, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
      gsap.to(q(".hero__content"), { yPercent: -18, opacity: 0.2, ease: "none", scrollTrigger: { trigger: el, start: "30% top", end: "bottom top", scrub: true } });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="top" ref={root} className="hero" aria-label="Introduction">
      <div className="hero__intro" aria-hidden>
        <Image src="/img/emblem.png" alt="" width={311} height={300} priority sizes="170px" />
      </div>

      <div className="hero__media">
        <div className="hero__par">
          <Image src="/img/hero.webp" alt="Contemporary residential building with glass balconies at golden hour" fill priority sizes="100vw" className="hero__img" />
        </div>
        <div className="hero__shade" />
      </div>
      <div className="hero__frame" aria-hidden />

      <div className="hero__content wrap">
        <p className="eyebrow eyebrow--plain hero__label">
          <span>Ekveera Infra Projects LLP</span> <i aria-hidden /> <span>Pune, India</span>
        </p>
        <h1 className="display hero__title">
          <span className="ln"><span>Building Legacies.</span></span>
          <span className="ln"><span><em>Shaping</em> Tomorrow.</span></span>
        </h1>
        <div className="hero__foot">
          <p className="hero__lede">Premium construction and development solutions, from groundwork to final handover.</p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--gold">Discuss Your Project <ArrowRight aria-hidden /></a>
            <a href="#services" className="btn btn--ghost">Explore Our Work</a>
          </div>
        </div>
      </div>

      <p className="hero__side" aria-hidden>
        Residential<b>/</b>Commercial<b>/</b>Turnkey
      </p>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span aria-hidden>Scroll</span>
        <i aria-hidden />
      </a>
    </section>
  );
}
