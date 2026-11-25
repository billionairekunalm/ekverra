"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { company, nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
        <div className="nav__bar wrap">
          <a href="#top" className="brand" aria-label="Ekveera Infra Projects LLP — home" onClick={close}>
            <Image src="/img/emblem.png" alt="" width={311} height={300} priority sizes="46px" />
            <span className="brand__txt">
              <b>EKVEERA</b>
              <small>Infra Projects LLP</small>
            </span>
          </a>
          <nav className="nav__links" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="link-u">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn--gold nav__cta">
            Discuss Your Project <ArrowRight aria-hidden />
          </a>
          <button type="button" className="nav__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <span>{open ? "Close" : "Menu"}</span>
            <i aria-hidden />
          </button>
        </div>
      </header>

      <div id="menu" className={`menu${open ? " is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav className="menu__links" aria-label="Mobile">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={close}>
              <span>0{i + 1}</span>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="menu__foot">
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <span>Walhekarwadi, Chinchwad, Pune</span>
          <a href="#contact" className="btn btn--gold" style={{ marginTop: 24 }} onClick={close}>
            Discuss Your Project <ArrowRight aria-hidden />
          </a>
        </div>
      </div>
    </>
  );
}
