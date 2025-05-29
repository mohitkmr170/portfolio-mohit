import { ArrowRight, Calendar, TagIcon } from "lucide-react";
import "./styles.css";
import { noPreview } from "../../Assets";

interface IProps {
  project: any;
}

const tech_stacks = [
  "React",
  "Redux",
  "Firebase",
  "React",
  "Redux",
  "Firebase",
];

export function ArticlesCard(props: IProps) {
  return (
    <div className="articles-card-details-container">
      <div>
        <div className="project-card-image">
          {" "}
          <img
            src={props?.project?.thumbNail}
            alt={noPreview}
            className="articles-image-logo"
          />
        </div>
        <div className="articles-card-details-sub-container">
          <div className="articles-time-and-tags-container">
            <div className="articles-time-container">
              <TagIcon size={16} />
              <div className="articles-time-text">{props?.project?.type}</div>
            </div>
            <div className="articles-time-container">
              <TagIcon size={16} />
              <div className="articles-time-text">
                {props?.project?.article ? "Article" : "Project"}
              </div>
            </div>
          </div>
          <h3>{props?.project?.description}</h3>
          <div className="project-card-details-text">
            {props?.project?.details}
          </div>
          <div
            className="project-card-external-link-container article-read-more-container"
            onClick={() =>
              window.open(props?.project?.link, "_blank", "noopener,noreferrer")
            }
          >
            <div className="read-more-text">View More</div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
