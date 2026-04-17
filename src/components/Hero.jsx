import { heroSlides } from "../data/siteData";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-card">
            <div className="eyebrow">Design | Renovation | Build</div>
            <h1 className="display hero-title">Multiplex Conversion Experts</h1>
            <p className="hero-text">
              Sigma Design &amp; Build specializes in multi-unit conversions for
              residential and commercial properties. We design and build with the
              investor&apos;s budget in mind, so your real estate asset can generate
              stronger long-term equity and cash flow.
            </p>
            <a className="btn" href="#contact">
              Get Quote
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="slides" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.image}
                className="slide"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  animationDelay: `${index * 4}s`
                }}
              />
            ))}
          </div>
          <div className="units-badge">
            <strong>116</strong>
            <span>Units Converted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
