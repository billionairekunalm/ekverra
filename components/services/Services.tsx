"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { groups } from "@/lib/content";

const all = groups.flatMap((g) => g.services.map((s) => ({ ...s, group: g })));

export default function Services() {
  const [active, setActive] = useState(0);
  const cur = all[active];

  // The service row crossing the middle of the viewport becomes active; hover also activates.
  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>(".svc");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.idx))),
      { rootMargin: "-48% 0px -48% 0px" },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="svcs sec" aria-labelledby="services-title">
      <div className="wrap">
        <div className="svcs__head">
          <div>
            <p className="eyebrow" data-reveal><b>02</b>&nbsp; Services</p>
            <h2 id="services-title" className="h2" data-split>
              <span className="ln"><span>Complete Construction</span></span>
              <span className="ln"><span><em>Solutions.</em></span></span>
            </h2>
          </div>
          <p className="lead" data-reveal>
            Sixteen disciplines across four stages of a building&rsquo;s life — complete construction services, tailored to each project.
          </p>
        </div>

        <nav className="svcs__index" aria-label="Service groups" data-reveal>
          {groups.map((g) => (
            <a key={g.key} href={`#group-${g.key}`} className={cur.group.key === g.key ? "is-on" : ""}>
              <span>{g.key}</span>
              <div>
                <b>{g.title}</b>
                <small>{g.services[0].no} — {g.services.at(-1)!.no}</small>
              </div>
            </a>
          ))}
        </nav>

        <div className="svcs__body">
          <div className="stack" aria-hidden>
            {all.map((s, i) => (
              <div key={s.no} className={`stack__img${i === active ? " is-active" : ""}`}>
                <Image src={`/img/${s.img}.webp`} alt="" fill sizes="(max-width: 900px) 1px, 45vw" style={{ objectFit: "cover" }} />
              </div>
            ))}
            <div className="stack__shade" />
            <span className="stack__tick" style={{ width: `${((active + 1) / all.length) * 100}%` }} />
            <span className="stack__count">{cur.no} / 16</span>
            <div className="stack__cap">
              <span key={`n${active}`} className="stack__no fade-key">{cur.no}</span>
              <div key={`m${active}`} className="stack__meta fade-key">
                <span>{cur.group.key} — {cur.group.title}</span>
                <b>{cur.title}</b>
              </div>
            </div>
          </div>

          <div>
            {groups.map((g) => (
              <div key={g.key} id={`group-${g.key}`} className="grp" style={{ scrollMarginTop: 110 }}>
                <header className="grp__head" data-reveal>
                  <span className="grp__key">{g.key}.</span>
                  <h3 className="h3">{g.title}</h3>
                  <p>{g.intro}</p>
                  <span className="rule" data-line aria-hidden />
                </header>
                {g.services.map((s) => {
                  const idx = all.findIndex((x) => x.no === s.no);
                  return (
                    <article key={s.no} data-idx={idx} className={`svc${idx === active ? " is-active" : ""}`} onMouseEnter={() => setActive(idx)}>
                      <div className="svc__thumb">
                        <Image src={`/img/${s.img}.webp`} alt={`${s.title} — representative image`} fill sizes="(max-width: 900px) 100vw, 1px" style={{ objectFit: "cover" }} />
                      </div>
                      <span className="svc__no">{s.no}</span>
                      <div>
                        <h4 className="svc__title">{s.title}</h4>
                        <ul className="svc__pts">
                          {s.points.map((p) => <li key={p}>{p}</li>)}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
