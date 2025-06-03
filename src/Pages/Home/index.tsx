import "./styles.css";
import { IntroSection } from "./IntroSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ArticlesSection } from "./ArticlesSection";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <IntroSection />
      <SkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default Home;
