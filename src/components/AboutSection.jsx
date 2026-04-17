import "../styles/about-section.css";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">Who We Are</div>
          <h2 className="display section-title">
            Expert Craftsmanship With The Investor&apos;s Budget In Mind.
          </h2>
          <p className="section-copy">
            Sigma Design &amp; Build focuses on multiplex conversions, additions,
            renovations, and design-build execution for urban residential assets.
            We combine planning, permits, construction, and delivery into one
            managed process.
          </p>
          <p className="section-copy">
            Our team works with timelines, budgets, zoning constraints, and
            long-term investment outcomes in mind. The goal is straightforward:
            create durable, high-performing spaces that raise property value and
            improve rental yield.
          </p>
          <a className="btn" href="#contact">
            Book Appointment
          </a>
        </div>
        <div className="about-media">
          <img
            src="https://plexcon.ca/wp-content/uploads/2024/07/plexcon_sampleimageforvideo.webp"
            alt="Model rendering"
          />
        </div>
      </div>
    </section>
  );
}
