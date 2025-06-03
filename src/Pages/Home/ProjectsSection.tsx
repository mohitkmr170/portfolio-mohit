import { useLocation, useNavigate } from "react-router";
import ProjectsCard from "../../Components/ProjectsCard";
import { PROJECTS } from "../../Config";
import { useEffect, useState } from "react";

export function ProjectsSection() {
  const [projectList, setProjectList] = useState<any>([]);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/projects") {
      let projects: any = PROJECTS.slice(0, 3);
      setProjectList(projects);
    } else {
      setProjectList(PROJECTS);
    }
  }, [location.pathname]);

  function renderProjectsCard() {
    return (
      <div className="cards-grid">
        {projectList.map((item: any) => (
          <ProjectsCard project={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="project-container">
      <h1 className="skill-text">Featured Projects</h1>
      <div className="skill-details-text">
        The following projects showcase my expertise in delivering high-quality
        solutions that prioritize clean, maintainable code, contemporary design
        principles, and exceptional user experience
      </div>
      {renderProjectsCard()}
      {location.pathname === "/" && (
        <div className="show-more-cta">
          <button
            onClick={() => navigate("projects")}
            className="download-button"
          >
            View All Project
          </button>
        </div>
      )}
    </div>
  );
}
