import Image from "next/image";

const materials = [
  { n: "i.", title: "Stone", text: "Granite, marble and natural stone.", img: "flooring", alt: "Polished marble lobby floor with inlaid pattern" },
  { n: "ii.", title: "Glass", text: "DGU glazing, louvers and vertical fins.", img: "facade", alt: "Glass and metal commercial facade lit at dusk" },
  { n: "iii.", title: "Metal", text: "MS & SS fabrication, railings and fixtures.", img: "lift", alt: "Engraved bronze lift doors" },
  { n: "iv.", title: "Timber", text: "Doors, frames, hardware and carpentry.", img: "doors", alt: "Walnut chevron-veneer door in a panelled interior" },
];

export default function Immersion() {
  return (
    <section className="imm sec" aria-labelledby="imm-title">
      <div className="wrap imm__head">
        <div>
          <p className="eyebrow" data-reveal><b style={{ color: "var(--ivory)" }}>03</b>&nbsp; Craftsmanship</p>
          <h2 id="imm-title" className="h2" data-split>
            <span className="ln"><span>Every Detail.</span></span>
            <span className="ln"><span><em>A Lasting Impression.</em></span></span>
          </h2>
        </div>
        <p className="lead" data-reveal>
          The quality of a building lives in its details — the joint in the stone, the line of the glazing, the weight of a door as it closes.
        </p>
      </div>

      <figure className="imm__wide" data-expand>
        <div className="pin" data-parallax="7">
          <Image src="/img/windows.webp" alt="Double-height living room with floor-to-ceiling black-framed glazing at sunset" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <figcaption>Windows &amp; sliding doors · Flooring · Finishes</figcaption>
      </figure>

      <div className="wrap mats">
        {materials.map((m, i) => (
          <article key={m.title} className="mat" data-reveal data-delay={i * 0.1}>
            <div className="mat__img">
              <Image src={`/img/${m.img}.webp`} alt={m.alt} fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: "cover" }} />
            </div>
            <div className="mat__cap">
              <span>{m.n}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
