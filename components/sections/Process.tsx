import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="proc sec" aria-labelledby="process-title">
      <div className="wrap">
        <div className="proc__head">
          <div>
            <p className="eyebrow" data-reveal><b>05</b>&nbsp; Process</p>
            <h2 id="process-title" className="h2" data-split>
              <span className="ln"><span>From Groundwork</span></span>
              <span className="ln"><span>to <em>Handover.</em></span></span>
            </h2>
          </div>
          <p className="lead" data-reveal>A clear, coordinated journey — every stage planned, communicated and carried through to the final detail.</p>
        </div>

        <ol className="proc__list">
          <li className="proc__track" aria-hidden><span className="proc__fill" /></li>
          {steps.map((s, i) => (
            <li key={s.no} className="step" data-reveal data-delay={i * 0.08}>
              <span className="step__mark"><span>{s.no}</span></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
