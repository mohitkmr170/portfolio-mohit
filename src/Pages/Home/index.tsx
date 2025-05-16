// import {} from "react";
import { AutoHScrollList } from "../../Components";
import "./styles.css";

import { personalImage } from "../../Assets";

export function Home() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="title">👋 Hi, I’m Mohit Kumar</h1>
          <p className="subtitle">
            Results-driven Frontend Lead with 6+ years of experience in
            developing scalable, high-performance mobile and web applications.
            Expertise in React Native, React.js, TypeScript & app architecting.
            Proven ability to optimize application performance, enhance user
            experience, and implement security best practices. Skilled in
            leading teams, mentoring developers, and driving scalable solutions.
          </p>
        </div>
        <div className="intro-image">
          <img src={personalImage} className="x" alt="" />
        </div>
      </div>
      <AutoHScrollList />
    </>
  );
}
