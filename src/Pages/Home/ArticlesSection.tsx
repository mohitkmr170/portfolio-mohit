import { useLocation, useNavigate } from "react-router";
import ArticlesCard from "../../Components/ArticlesCard";
import { be, boilerplate, lighthouse } from "../../Assets";
import { useEffect, useState } from "react";

const PROJECTS = [
  {
    type: "Web",
    article: true, //if article=true, print Article, else Project
    description: "Improve Web App Performance Using Lighthouse",
    details:
      "Learn how to improve your application's performance using Lighthouse tools in this concise guide",
    thumbNail: lighthouse,
    link: "https://techblog.geekyants.com/improve-web-app-performance-using-lighthouse",
  },
  {
    type: "Mobile",
    article: false,
    description: "React native boilerplate(parse & hooks)",
    details:
      "A React Native boilerplate using RN-hooks, Typescript , Parse and Context API",
    thumbNail: boilerplate,
    link: "https://github.com/mohitkmr170/RN-parse-hooks-boilerplate",
  },
  {
    type: "Mobile",
    article: false,
    description: "React native boilerplate",
    details:
      "A React Native boilerplate that has all sorts of RN features that comes out of the box along with basic and mandatory initial dependencies and setup",
    thumbNail: boilerplate,
    link: "https://github.com/mohitkmr170/react-native-boilerplate",
  },
  {
    type: "REST API",
    article: false,
    description: "A node auth app",
    details: "A node app using express & mysql DB for auth related Rest API's",
    thumbNail: be,
    link: "https://github.com/mohitkmr170/node-express-mysql-auth",
  },
];

export function ArticlesSection() {
  const [articleList, setArticleList] = useState<any>([]);
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/articles") {
      let projects: any = PROJECTS.slice(0, 3);
      setArticleList(projects);
    } else {
      setArticleList(PROJECTS);
    }
  }, [location.pathname]);

  function renderArticles() {
    return (
      <div className="cards-grid">
        {articleList.map((item: any) => (
          <ArticlesCard project={item} />
        ))}
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
      {location.pathname === "/" && (
        <div className="show-more-cta">
          <button
            onClick={() => navigate("articles")}
            className="download-button"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}
