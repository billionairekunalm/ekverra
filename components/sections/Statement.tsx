import Image from "next/image";

export default function Statement() {
  return (
    <section className="stmt" aria-labelledby="stmt-title">
      <div className="stmt__bg" data-parallax="8">
        <Image src="/img/hero.webp" alt="" fill sizes="100vw" />
      </div>
      <div className="stmt__shade" />
      <div className="stmt__inner wrap">
        <div data-reveal>
          <Image className="stmt__emblem" src="/img/emblem.png" alt="" width={311} height={300} sizes="64px" />
        </div>
        <p className="eyebrow eyebrow--plain" data-reveal style={{ marginTop: 28 }}>Build with Confidence</p>
        <h2 id="stmt-title" className="display" data-split>
          <span className="ln"><span>Luxury in</span></span>
          <span className="ln"><span><em>Every Structure.</em></span></span>
        </h2>
        <p className="stmt__lines" data-reveal>
          <span>Thoughtful construction.</span><i aria-hidden />
          <span>Exceptional execution.</span><i aria-hidden />
          <span>Lasting value.</span>
        </p>
      </div>
    </section>
  );
}
