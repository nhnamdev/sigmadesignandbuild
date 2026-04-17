import { contactInfo } from "../data/siteData";
import "../styles/topbar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <div className="social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              i
            </a>
          </div>
          <a href={contactInfo[0].href}>{contactInfo[0].value}</a>
          <a href={contactInfo[1].href}>{contactInfo[1].value}</a>
        </div>
        <div className="topbar-right">
          <a href={contactInfo[2].href} target="_blank" rel="noreferrer">
            {contactInfo[2].value}
          </a>
        </div>
      </div>
    </div>
  );
}
