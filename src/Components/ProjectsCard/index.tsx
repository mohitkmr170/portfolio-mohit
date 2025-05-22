import { ExternalLink, Github } from "lucide-react";
import "./styles.css";

const tech_stacks = [
  "React",
  "Redux",
  "Firebase",
  "React",
  "Redux",
  "Firebase",
];

export function ProjectsCard() {
  function renderTechStacks(item: any) {
    return <span className="tech-stack-item">{item}</span>;
  }

  return (
    <div className="project-card-container">
      <div className="project-card-image">E-commerce Dashboard</div>
      <div className="project-card-details-container">
        <h3>E-commerce Dashboard</h3>
        <div className="project-card-details-text">
          A responsive admin dashboard for an e-commerce platform with real-time
          analytics, inventory management, and order processing.
        </div>
        <div className="project-card-tech-stack-container">
          {tech_stacks.map(renderTechStacks)}
        </div>
        <div className="project-card-external-link-container">
          <div className="project-card-external-link">
            <ExternalLink size={18} className="external-link-icon" />
            <div className="project-card-external-link-text">Live Demo</div>
          </div>
          <div className="project-card-external-link">
            <Github size={16} className="external-link-icon" />
            <div className="project-card-external-link-text">Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}
