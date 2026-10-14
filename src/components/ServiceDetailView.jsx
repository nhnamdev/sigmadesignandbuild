import { serviceDetails, services } from "../data/siteData";
import "../styles/service-detail.css";

export default function ServiceDetailView({ serviceId, onBack, onSelectService }) {
  const detail = serviceDetails[serviceId] || serviceDetails["multiplex-conversions"];
  const otherServices = services.filter((s) => s.id !== detail.id);

  function handleContactClick(e) {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <article className="service-detail-view" id="service-top">
      {/* Top sticky-friendly bar */}
      <div className="detail-topbar">
        <div className="container detail-topbar-inner">
          <nav aria-label="Breadcrumb" className="detail-breadcrumb">
            <button type="button" className="breadcrumb-link" onClick={onBack}>
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <button type="button" className="breadcrumb-link" onClick={onBack}>
              Services
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{detail.title}</span>
          </nav>

          <div className="detail-topbar-actions">
            <button
              type="button"
              className="btn-back"
              onClick={onBack}
              aria-label="Back to all services"
            >
              <span className="back-arrow" aria-hidden="true">&larr;</span> Back to All Services
            </button>
            <a
              href="#contact"
              className="btn-topbar-cta"
              onClick={handleContactClick}
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>

      <div className="container detail-container">
        {/* Hero Section */}
        <header className="detail-hero">
          <div className="detail-eyebrow">{detail.eyebrow}</div>
          <h1 className="detail-headline">{detail.headline}</h1>
          <p className="detail-summary">{detail.summary}</p>

          <div className="detail-meta-tags">
            <span className="meta-tag">
              <span className="tag-dot" /> Toronto &amp; GTA Coverage
            </span>
            <span className="meta-tag">
              <span className="tag-dot" /> Ontario Building Code (OBC) Compliant
            </span>
            <span className="meta-tag">
              <span className="tag-dot" /> Turnkey Design-Build Execution
            </span>
          </div>

          <div className="detail-media-showcase">
            <div className="media-card primary">
              <img
                src={detail.image}
                alt={`${detail.title} architectural conversion`}
                className="showcase-img"
              />
              <div className="media-overlay-badge">
                <span className="badge-sub">Execution Standard</span>
                <strong>Municipal Code &amp; Zoning Verified</strong>
              </div>
            </div>
            {detail.secondaryImage && (
              <div className="media-card secondary">
                <img
                  src={detail.secondaryImage}
                  alt={`${detail.title} detail craftsmanship`}
                  className="showcase-img"
                />
              </div>
            )}
          </div>
        </header>

        {/* 4-Column Key Metrics Bar */}
        <section className="detail-section" aria-label="Key Performance Indicators">
          <div className="metrics-grid">
            {detail.metrics.map((metric) => (
              <div key={metric.label} className="metric-box">
                <div className="metric-val">{metric.value}</div>
                <div className="metric-lbl">{metric.label}</div>
                <p className="metric-desc">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic Market Context */}
        <section className="detail-section">
          <div className="context-card">
            <div className="context-tag">{detail.context.tag}</div>
            <h2 className="context-title">{detail.context.title}</h2>
            <div className="context-body">
              {detail.context.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Engineering & Technical Specifications Grid */}
        <section className="detail-section" aria-label="Technical Specifications">
          <div className="section-header-block">
            <div className="eyebrow">Technical Standards</div>
            <h2 className="section-block-title">
              Engineering Specs &amp; Building Code Rigor
            </h2>
            <p className="section-block-sub">
              Every detail is engineered to protect owner liability, guarantee tenant acoustic comfort, and ensure rapid municipal sign-offs.
            </p>
          </div>

          <div className="specs-grid">
            {detail.technicalSpecs.map((spec, i) => (
              <article key={spec.title} className="spec-card">
                <div className="spec-card-header">
                  <span className="spec-index">0{i + 1}</span>
                  <span className="spec-badge">{spec.spec}</span>
                </div>
                <h3 className="spec-title">{spec.title}</h3>
                <p className="spec-description">{spec.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 4-Phase Delivery Roadmap */}
        <section className="detail-section" aria-label="Project Roadmap">
          <div className="section-header-block">
            <div className="eyebrow">Execution Timeline</div>
            <h2 className="section-block-title">Turnkey 4-Phase Delivery Process</h2>
            <p className="section-block-sub">
              From the initial zoning review to final City Occupancy Certification, our structured process protects your budget and schedule.
            </p>
          </div>

          <div className="roadmap-grid">
            {detail.roadmap.map((item) => (
              <div key={item.step} className="roadmap-card">
                <div className="roadmap-top">
                  <span className="roadmap-step">{item.step}</span>
                  <span className="roadmap-duration">{item.duration}</span>
                </div>
                <h3 className="roadmap-title">{item.title}</h3>
                <p className="roadmap-details">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Comparison / Case Study Table */}
        {detail.comparison && (
          <section className="detail-section" aria-label="Financial Comparison">
            <div className="section-header-block">
              <div className="eyebrow">Financial Impact</div>
              <h2 className="section-block-title">{detail.comparison.title}</h2>
              <p className="section-block-sub">
                A quantitative overview demonstrating how proactive density unlocks substantial equity and recurring monthly cashflow.
              </p>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    {detail.comparison.columns.map((col, idx) => (
                      <th key={idx} className={idx === 2 ? "highlight-col" : ""}>
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {detail.comparison.rows.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={
                            cellIdx === 0
                              ? "metric-name"
                              : cellIdx === 2
                              ? "highlight-cell"
                              : cellIdx === 3
                              ? "advantage-cell"
                              : ""
                          }
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Technical & Permitting FAQs */}
        <section className="detail-section" aria-label="Frequently Asked Questions">
          <div className="section-header-block">
            <div className="eyebrow">Direct Answers</div>
            <h2 className="section-block-title">
              Frequently Asked Questions About {detail.title}
            </h2>
            <p className="section-block-sub">
              Key considerations regarding permits, timeline, utilities, and municipality rules.
            </p>
          </div>

          <div className="detail-faqs-grid">
            {detail.faqs.map((faq, idx) => (
              <div key={idx} className="detail-faq-card">
                <h3 className="detail-faq-q">{faq.question}</h3>
                <p className="detail-faq-a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="detail-section" aria-label="Explore Other Services">
          <div className="explore-header">
            <div>
              <div className="eyebrow">Explore Other Strategies</div>
              <h3 className="explore-title">Additional Turnkey Solutions</h3>
            </div>
            <button type="button" className="services-header-link" onClick={onBack}>
              View All Services <span className="arrow" aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="explore-grid">
            {otherServices.map((item) => (
              <div
                key={item.id}
                className="explore-card"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <div className="explore-card-img-wrap">
                  <img src={item.image} alt={item.title} className="explore-card-img" />
                </div>
                <div className="explore-card-body">
                  <h4 className="explore-card-title">{item.title}</h4>
                  <p className="explore-card-text">{item.body}</p>
                  <span className="service-learn-more">
                    Learn More <span className="arrow" aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* High-Impact CTA Box */}
        <section className="detail-cta-box" aria-label="Call to action">
          <div className="cta-box-content">
            <div className="eyebrow" style={{ color: "#e7d2a3" }}>
              Complimentary Feasibility Assessment
            </div>
            <h2 className="cta-box-headline">
              Ready to Maximize the Density &amp; Cashflow of Your Toronto Property?
            </h2>
            <p className="cta-box-text">
              Speak directly with our planning and build principals. We review your municipal zoning, calculate allowable footprint, analyze structural feasibility, and provide preliminary ROI estimates.
            </p>
            <div className="cta-box-actions">
              <a
                href="#contact"
                className="btn btn-cta-primary"
                onClick={handleContactClick}
              >
                Book Feasibility Consultation
              </a>
              <button type="button" className="btn btn-cta-secondary" onClick={onBack}>
                &larr; Return to Overview
              </button>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
