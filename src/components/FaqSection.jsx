import { useState } from "react";
import { faqItems } from "../data/siteData";
import "../styles/faq-section.css";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="eyebrow section-center">FAQ</div>
        <h2 className="display section-title section-center">
          Questions About Multiplex Conversions
        </h2>
        <p className="section-copy faq-intro">
          These are the common questions clients ask before starting a
          conversion, addition, or multi-unit residential build.
        </p>
        <div className="faq-wrap">
          {faqItems.map((item, index) => {
            const isActive = openIndex === index;

            return (
              <div key={item.question} className={`faq-item ${isActive ? "active" : ""}`}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenIndex(isActive ? -1 : index)}
                >
                  <span />
                  {item.question}
                </button>
                <div className="faq-answer">{item.answer}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
