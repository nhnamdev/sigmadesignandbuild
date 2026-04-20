import { services } from "../data/siteData";
import "../styles/services-section.css";

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      {/* <div className="container">
        <div className="service-grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p>{service.body}</p>
                <a className="service-link" href="#contact">
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div> */}
    </section>
  );
}
