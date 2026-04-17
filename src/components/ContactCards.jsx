import { contactInfo } from "../data/siteData";
import "../styles/contact-cards.css";

export default function ContactCards() {
  return (
    <div className="info-row footer-info-row">
      {contactInfo.map((item) => (
        <a
          key={item.label}
          className="info-card"
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <div className="info-label">{item.label}</div>
          <div className="info-value">{item.value}</div>
        </a>
      ))}
    </div>
  );
}
