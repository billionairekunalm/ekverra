import Image from "next/image";
import { company, principles } from "@/lib/content";

export default function Intro() {
  return (
    <section id="about" className="intro sec blueprint" aria-labelledby="about-title">
      <div className="wrap intro__grid">
        <figure className="intro__media" data-clip>
          <div className="pin" data-parallax="6">
            <Image src="/img/facade-detail.webp" alt="Stone-clad residential facade with glass balconies and bronze fins in warm evening light" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <figcaption className="intro__badge">
            <span>Construction &amp; Development</span>
            <b>From groundwork to final handover</b>
          </figcaption>
        </figure>

        <div className="intro__text">
          <p className="eyebrow" data-reveal><b>01</b>&nbsp; About Ekveera</p>
          <h2 id="about-title" className="h2" data-split>
            <span className="ln"><span>Built on Precision.</span></span>
            <span className="ln"><span><em>Defined</em> by Excellence.</span></span>
          </h2>
          <p className="lead" data-reveal>
            From the first stages of groundwork to the final handover, Ekveera Infra Projects LLP delivers comprehensive construction and
            development solutions with a focus on quality, coordination and lasting value.
          </p>
          <dl className="intro__meta" data-reveal>
            <div>
              <dt>Expertise</dt>
              <dd>Residential · Commercial · Turnkey</dd>
            </div>
            <div>
              <dt>{company.role}</dt>
              <dd>{company.director}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="wrap principles">
        {principles.map((p, i) => (
          <div key={p.no} className="principle" data-reveal data-delay={i * 0.12}>
            <span className="rule" data-line aria-hidden />
            <span className="principle__no">{p.no}</span>
            <h3 className="h3">{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
