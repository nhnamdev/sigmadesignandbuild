import { impactStats } from "../data/siteData";
import "../styles/stats-section.css";

export default function StatsSection() {
  return (
    <section className="stats-section" aria-label="Company highlights">
      <div className="container">
        <div className="stats-shell">
          {impactStats.map((item) => (
            <article className="stat-card" key={item.label}>
              <div className="stat-value">{item.value}</div>
              <h2 className="stat-label">{item.label}</h2>
              <p className="stat-copy">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
