import { projects } from "../data/siteData";
import "../styles/projects-section.css";

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container projects-layout">
        <div className="projects-side">
          <div className="eyebrow">Our Recent Projects</div>
          <h2 className="display section-title">Selected Work</h2>
          <p className="section-copy">
            A snapshot of recent conversion and infill-style projects. These
            cards are styled to match the reference layout closely.
          </p>
          <a className="btn" href="#contact">
            See All
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
