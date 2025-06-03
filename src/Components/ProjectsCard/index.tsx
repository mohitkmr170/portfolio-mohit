import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import OverlayModal from "../OverlayModal";
import "./styles.css";
import { noPreview } from "../../Assets";

const ProjectsCard = (props: any) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  function renderTechStacks(item: any) {
    return <span className="tech-stack-item">{item}</span>;
  }

  function handleDemoAction(e: React.MouseEvent) {
    e.stopPropagation();
    if (props?.project?.accessibility === "private") alert("Not accessible");
  }

  function handleCodeAction(e: React.MouseEvent) {
    e.stopPropagation();
    if (props?.project?.accessibility === "private") alert("Not accessible");
  }

  const handleProjectDetailsModal = () => {
    setIsVisible(true);
  };

  const renderModalContent = () => {
    return (
      <div>
        <div className="title-container">
          <img
            src={props?.project?.thumbNail}
            alt={noPreview}
            className="project-image-logo"
            loading="lazy"
          />
          <h2>{props?.project?.projectName}</h2>
        </div>
        <h4 className="project-card-details-text">{props?.project?.details}</h4>
        <div className="project-card-details-text deliverabled-text">
          Key Deliverables
        </div>
        <ul>
          {props?.project?.myContribution.map((item: string) => {
            return <li className="contribution-list-item-text">{item}</li>;
          })}
        </ul>
        <div className="project-card-tech-stack-container">
          {props?.project?.techStack.map(renderTechStacks)}
        </div>
        <div className="timeline-role-container">
          <div>
            <div className="timeline-text">Timeline</div>
            <div className="contribution-list-item-text">
              {props?.project?.timeline}
            </div>
          </div>
          <div className="role-container">
            <div className="timeline-text">Role</div>
            <div className="contribution-list-item-text">
              {props?.project?.role}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="project-card-container"
      onClick={() => handleProjectDetailsModal()}
    >
      <div className="project-card-image">
        <img
          src={
            props?.project?.thumbNail ? props?.project?.thumbNail : noPreview
          }
          alt={
            props?.project?.thumbNail ? props?.project?.thumbNail : noPreview
          }
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="project-card-details-container">
        <h3>{props?.project?.projectName}</h3>
        <div className="project-card-details-text">
          {props?.project?.details}
        </div>
        <div className="project-card-tech-stack-container">
          {props?.project?.techStack.map(renderTechStacks)}
        </div>
        <div className="project-card-external-link-container">
          <div
            className="project-card-external-link"
            onClick={(e) => handleDemoAction(e)}
          >
            <ExternalLink size={18} className="external-link-icon" />
            <div className="project-card-external-link-text">Live Demo</div>
          </div>
          <div
            className="project-card-external-link"
            onClick={(e) => handleCodeAction(e)}
          >
            <Github size={16} className="external-link-icon" />
            <div className="project-card-external-link-text">Code</div>
          </div>
        </div>
      </div>
      <OverlayModal
        visible={isVisible}
        onClose={() => {
          console.log("close clicked!");
          setIsVisible(false);
        }}
        renderContent={renderModalContent}
      />
    </div>
  );
};
export default ProjectsCard;
