import {
  css,
  firebase,
  html,
  jsTs,
  react,
  reactNative,
  redux,
} from "../../Assets";
import "./styles.css";

const skills = [
  {
    name: "React Native",
    image: reactNative,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "React Native",
    image: jsTs,
  },
  {
    name: "React",
    image: html,
  },
  {
    name: "Redux",
    image: css,
  },
  {
    name: "Redux",
    image: firebase,
  },
];

export function AutoHScrollList() {
  function renderItems(item: any, index: any) {
    return (
      <div key={index} className="logo-item">
        <img
          src={item?.image}
          key={`${item?.name}`}
          className="skill-image"
          alt={`${item?.name}`}
        />
      </div>
    );
  }

  return (
    <div className="infinite-scroller-container">
      <div className="scroller">
        <div className="logos-container">
          {[...skills, ...skills].map((element, index) =>
            renderItems(element, index)
          )}
        </div>
      </div>
    </div>
  );
}
