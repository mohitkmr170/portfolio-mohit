import { useNavigate } from "react-router";
import { ArticlesCard } from "../../Components";

export function ArticlesSection() {
  let navigate = useNavigate();

  function renderArticles() {
    return (
      <div className="cards-grid">
        <ArticlesCard />
        <ArticlesCard />
        <ArticlesCard />
      </div>
    );
  }
  return (
    <div className="article-container">
      <h1 className="skill-text">Open Source & Latest Articles</h1>
      <div className="skill-details-text">
        I share my knowledge and experiences through writing. Here are some of
        my recent articles on web development and design.
      </div>
      {renderArticles()}
      <div className="show-more-cta">
        <button
          onClick={() => navigate("Projects")}
          className="download-button"
        >
          View All Articles
        </button>
      </div>
    </div>
  );
}
