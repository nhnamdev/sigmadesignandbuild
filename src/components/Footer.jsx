import ContactCards from "./ContactCards";
import { contactInfo, footerLinks } from "../data/siteData";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-cta-wrap" id="contact">
      <div className="container">
        <div className="footer-cta-card">
          <div className="footer-cta">
            <div>
              <div className="eyebrow">Invest In Multi-Family Homes</div>
              <h2 className="display">
                Build More Value Into The Same Property.
              </h2>
              <p className="section-copy">
                Start with a feasibility discussion, then move into design,
                approvals, pricing, and construction planning.
              </p>
              <a className="btn" href={contactInfo[1].href}>
                Book Appointment
              </a>
            </div>
            <div className="form-card">
              <h3>Get In Touch</h3>
              <form className="form-grid">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="City" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <textarea placeholder="Message" />
                <button className="btn form-submit" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">Sigma Design &amp; Build</div>
              <p>
                Multiplex conversions, renovations, additions, and design-build
                delivery for urban residential properties.
              </p>
            </div>

            <div className="footer-col">
              <h4>Links</h4>
              {footerLinks.map((link) => (
                <a key={link} href="#services">
                  {link}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <h4>Connect</h4>
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.value}
                </a>
              ))}
            </div>

            <div className="footer-col">
              <h4>Service Areas</h4>
              <p>
                East Danforth, Liberty Village, Trinity-Bellwoods, Parkdale,
                Rosedale, East York, York, Leslieville.
              </p>
            </div>
          </div>

          <ContactCards />

          <div className="footer-bottom">
            <div>&copy; 2026 Sigma Design &amp; Build. All Rights Reserved.</div>
            <div>
              <a href="#">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
