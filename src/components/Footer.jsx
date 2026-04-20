import { useState } from "react";
import ContactCards from "./ContactCards";
import { contactInfo, footerLinks } from "../data/siteData";
import "../styles/footer.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  }

  async function parseResponse(response) {
    const rawText = await response.text();
    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    if (!rawText) {
      return {};
    }

    if (isJson) {
      try {
        return JSON.parse(rawText);
      } catch {
        throw new Error("The contact endpoint returned invalid JSON.");
      }
    }

    if (rawText.includes("<!DOCTYPE html") || rawText.includes("<html")) {
      throw new Error("The contact endpoint is not available on this deployment yet.");
    }

    return { error: rawText };
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      const payload = await parseResponse(response);

      if (!response.ok) {
        throw new Error(
          payload.error || `Could not send your message. Server returned ${response.status}.`
        );
      }

      setSubmitState({
        status: "success",
        message: payload.message || "Your message has been sent successfully."
      });
      setFormData({
        name: "",
        city: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error.message || "Could not send your message."
      });
    }
  }

  return (
    <footer className="footer-cta-wrap" id="contact">
      <div className="container">
        <div className="footer-cta-card">
          <div className="footer-cta">
            <div>
              {/* <div className="eyebrow">Invest In Multi-Family Homes</div> */}
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
              <form className="form-grid" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="120"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  maxLength="120"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="40"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  minLength="10"
                  maxLength="3000"
                  required
                />
                <button
                  className="btn form-submit"
                  type="submit"
                  disabled={submitState.status === "loading"}
                >
                  {submitState.status === "loading" ? "Sending..." : "Send"}
                </button>
                <p
                  className={`form-status ${submitState.status}`}
                  aria-live="polite"
                  role="status"
                >
                  {submitState.message}
                </p>
                <p className="form-note">
                  Messages are sent directly to our inbox and we reply by email.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">Sigma Design &amp; Build</div>
              {/* <p>
                Multiplex conversions, renovations, additions, and design-build
                delivery for urban residential properties.
              </p> */}
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
                Toronto and the GTA.
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
