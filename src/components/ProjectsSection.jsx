import { projects } from "../data/siteData";
import "../styles/projects-section.css";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container projects-layout">
        <div className="projects-side">
          <div className="eyebrow">Featured Projects</div>
          <h2 className="display section-title">Recent Work</h2>
          <p className="section-copy">
            A cross-section of multiplex conversions, top-ups, and suite
            additions delivered with a clear investment lens.
          </p>
          <a className="btn" href="#contact">
            Start Your Project
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={{ backgroundImage: `url('${project.image}')` }}
            >
              <div>
                <div className="project-tag">{project.tag}</div>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
