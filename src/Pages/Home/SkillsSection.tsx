import { useNavigate } from "react-router";
import { SkillsCard } from "../../Components";
import { SKILLS } from "../../Config";

export function SkillsSection() {
  let navigate = useNavigate();

  function renderSkillsCard() {
    return (
      <div className="cards-grid">
        {SKILLS.map((item, index) => (
          <SkillsCard skills={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="skills-container">
      <h1 className="skill-text">My Skills</h1>
      <div className="skill-details-text">
        I bring experience working with multiple technologies in both mobile and
        web front-end development environments for end-to-end product
        development.
      </div>
      {renderSkillsCard()}
      <div className="show-more-cta">
        <button onClick={() => navigate("skills")} className="download-button">
          Show more
        </button>
      </div>
    </div>
  );
}
