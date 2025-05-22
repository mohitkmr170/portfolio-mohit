import { ArrowRight, Calendar, TagIcon } from "lucide-react";
import "./styles.css";

const tech_stacks = [
  "React",
  "Redux",
  "Firebase",
  "React",
  "Redux",
  "Firebase",
];

export function ArticlesCard() {
  return (
    <div className="project-card-container">
      <div className="project-card-image">React Performance Optimization</div>
      <div className="articles-card-details-container">
        <div className="articles-time-and-tags-container">
          <div className="articles-time-container">
            <Calendar size={16} />
            <div className="articles-time-text">May 12, 2025</div>
          </div>
          <div className="articles-time-container">
            <TagIcon size={16} />
            <div className="articles-time-text">React</div>
          </div>
        </div>
        <h3>E-commerce Dashboard</h3>
        <div className="project-card-details-text">
          A responsive admin dashboard for an e-commerce platform with real-time
          analytics, inventory management, and order processing.
        </div>
        <div className="project-card-external-link-container article-read-more-container">
          <div className="read-more-text">Read More</div>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
