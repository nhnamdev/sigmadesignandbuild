import { testimonials } from "../data/siteData";
import "../styles/testimonials-section.css";

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section" aria-label="Client reviews">
      <div className="container">
        <div className="testimonials-header">
          <div className="eyebrow">Client Reviews</div>
          <h2 className="display section-title">What Clients Say</h2>
          <p className="section-copy testimonials-intro">
            Feedback from owners who trusted Sigma Design &amp; Build with
            conversions, additions, and secondary suite work.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
