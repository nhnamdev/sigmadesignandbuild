import { services } from "../data/siteData";
import "../styles/services-section.css";

export default function ServicesSection({ onSelectService }) {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-header">
          <div className="services-header-left">
            <h2 className="display services-title">Our Services</h2>
            <p className="services-subtitle">
              Smart solutions for homeowners and investors in Toronto.
            </p>
          </div>
          <a
            href="#services"
            className="services-header-link"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Services <span className="arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.id || service.title}
              className="service-card-item"
              onClick={() => onSelectService && onSelectService(service.id)}
            >
              <div className="service-card-media">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="service-card-img"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-body">{service.body}</p>
                <button
                  type="button"
                  className="service-learn-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onSelectService) onSelectService(service.id);
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More <span className="arrow" aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
