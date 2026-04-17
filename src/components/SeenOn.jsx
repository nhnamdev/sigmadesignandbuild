import { seenOnItems } from "../data/siteData";
import "../styles/seen-on.css";

export default function SeenOn() {
  return (
    <section className="seen">
      <div className="container">
        <h2>Seen On</h2>
        <div className="logo-row">
          {seenOnItems.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
