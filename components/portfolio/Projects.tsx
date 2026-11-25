import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/content";

type P = (typeof projects)[number];

function Tag({ p }: { p: P }) {
  return p.placeholder ? <span className="pj__tag">Representative imagery</span> : null;
}

export default function Projects() {
  const [lead, ...rest] = projects;
  return (
    <section id="projects" className="proj sec" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="proj__head">
          <div>
            <p className="eyebrow" data-reveal><b>04</b>&nbsp; Projects</p>
            <h2 id="projects-title" className="h2" data-split>
              <span className="ln"><span>Spaces Built</span></span>
              <span className="ln"><span>to <em>Endure.</em></span></span>
            </h2>
          </div>
          <p className="lead" data-reveal>Residential, commercial and turnkey construction — each delivered with the same care from foundation to finish.</p>
        </div>

        <article className="pj pj--lead">
          <div className="pj__img" data-clip>
            <Tag p={lead} />
            <Image src={`/img/${lead.img}.webp`} alt={`${lead.type} building — representative image`} fill sizes="100vw" style={{ objectFit: "cover" }} />
          </div>
          <div className="pj__body" data-reveal>
            <div>
              <p className="pj__type">{lead.type} <i aria-hidden /> {lead.location}</p>
              <h3 className="h3">{lead.name}</h3>
            </div>
            <p>{lead.text}</p>
          </div>
        </article>

        <div className="proj__pair">
          {rest.map((p) => (
            <article key={p.name} className="pj">
              <div className="pj__img" data-clip>
                <Tag p={p} />
                <Image src={`/img/${p.img}.webp`} alt={`${p.type} project — representative image`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="pj__body" data-reveal>
                <p className="pj__type">{p.type} <i aria-hidden /> {p.location}</p>
                <h3 className="h3">{p.name}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="proj__note" data-reveal>
          <span>Our project portfolio is being curated. Completed work and site photography will be published here.</span>
          <a href="#contact" className="btn btn--line">Discuss Your Project <ArrowRight aria-hidden /></a>
        </div>
      </div>
    </section>
  );
}
