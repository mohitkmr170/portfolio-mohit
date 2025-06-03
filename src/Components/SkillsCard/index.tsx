import { Check } from "lucide-react";
import "./styles.css";

const SkillsCard = (props: any) => {
  function renderCardItems(item: any) {
    return (
      <div className="card-items-container">
        <Check />
        <span className="skills-text">{item}</span>
      </div>
    );
  }

  return (
    <div className="skills-card-container">
      <div className="skills-card-top-container">
        {props?.skills?.icon}
        <h3 className="skills-type-text">{props?.skills?.type}</h3>
      </div>
      {props?.skills?.skills.map(renderCardItems)}
    </div>
  );
};
export default SkillsCard;
