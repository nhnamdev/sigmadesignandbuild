import { serviceAreas } from "../data/siteData";
import "../styles/areas-section.css";

export default function AreasSection() {
  return (
    <section className="section dark-band">
      <div className="container">
        <div className="eyebrow">Where We Serve</div>
        <h2 className="display section-title dark-title">
          Serving The Downtown Core
        </h2>
        <p className="section-copy dark-copy">
          Sigma Design &amp; Build can support multiplex conversions, additions,
          and multi-unit residential work throughout Toronto&apos;s core neighborhoods
          and nearby urban districts.
        </p>
        <div className="areas-grid">
          {serviceAreas.map((area) => (
            <div key={area}>{area}</div>
          ))}
        </div>
        <a className="btn" href="#contact">
          Book Appointment
        </a>
      </div>
    </section>
  );
}
