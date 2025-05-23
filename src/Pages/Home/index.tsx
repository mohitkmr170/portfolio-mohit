import "./styles.css";
import { IntroSection } from "./IntroSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ArticlesSection } from "./ArticlesSection";
import { Footer } from "../../Components";

export function Home() {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <Footer />
    </>
  );
}
