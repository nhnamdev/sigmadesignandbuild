import { useState } from "react";
import { navItems } from "../data/siteData";
import "../styles/header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <img className="brand-mark" src="/logo/logo-xoaphong.png" alt="Sigma Design & Build logo" />
          {/* <span>Sigma Design &amp; Build</span> */}
        </a>

        <nav className={`nav ${isOpen ? "open" : ""}`} id="nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="quote-btn" href="#contact">
            Get Quote
          </a>
          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
