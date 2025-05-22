// import {} from "react";
import { AutoHScrollList, SkillsCard } from "../../Components";
import {
  LocateIcon,
  Briefcase,
  UniversityIcon,
  Github,
  Linkedin,
  Phone,
  Mail,
  CodeXml,
  Settings,
  Cloud,
} from "lucide-react";
import "./styles.css";
import { personalImage } from "../../Assets";
import { useNavigate } from "react-router";

const xp = [
  {
    icon: <UniversityIcon />,
    title: "Education",
    subTitle: "Btech in CSE",
    location: "School of technology, Assam university(2014-2018)",
  },
  {
    icon: <Briefcase />,
    title: "Experience",
    subTitle: "Frontend Developer",
    location: "2018 - Present",
  },
  {
    icon: <LocateIcon />,
    title: "Location",
    subTitle: "Bengaluru",
    location: "India",
  },
];

const SKILLS = [
  {
    type: "Technical Skills",
    icon: <CodeXml size={30} />,
    skills: [
      "React Native (Android & iOS)",
      "React.js, Next.js",
      "JavaScript (ES6+), TypeScript",
      "HTML",
      "CSS, Tailwind CSS",
    ],
  },
  {
    type: "Tools & Services",
    icon: <Settings size={30} />,
    skills: [
      "Redux, MobX, Context API",
      "Firebase, Dynatrace, Security",
      "Git/Github, Bitbucket, Linux",
      "Figma, AdobeXD",
      "ESLint, TSLint, SonarLint",
      "Performance moniroting and optimization",
    ],
  },
  {
    type: "DevOps & Backend Services",
    icon: <Cloud size={30} />,
    skills: [
      "GitHub Actions, Bitrise, Fastlane",
      "App Store & Play Store Deployments",
      "REST APIs",
      "GraphQL(Apollo client)",
      "Firebase, AWS Amplify",
    ],
  },
];

export function Home() {
  let navigate = useNavigate();

  function renderXp(item: any) {
    return (
      <div className="xp-item-container">
        {item.icon}
        <div className="xp-content-container">
          <h3 className="xp-content-title">{item.title}</h3>
          <p className="xp-content-subtitle">{item.subTitle}</p>
          <p className="xp-content-location">{item.location}</p>
        </div>
      </div>
    );
  }

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
    <>
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="title">👋 Hi, I’m Mohit Kumar</h1>
          <h2 className="title">Frontend Development Enthusiast</h2>
          <p className="subtitle">
            I craft intuitive, high-performing consumer applications(mobile and
            web) that blend modern development practices with creative
            problem-solving.
          </p>
        </div>
        <div className="intro-image-container">
          <img src={personalImage} className="intro-image" alt="" />
        </div>
      </div>
      <AutoHScrollList />
      <div className="about-container">
        <h1 className="about-me-text">About Me</h1>
        <div className="about-inner-container">
          <div className="xp-container">{xp.map(renderXp)}</div>
          <div className="whoiam-container">
            <h1>Who i am</h1>
            <p className="whoami-text">
              Results-driven Frontend Lead with 6+ years of experience in
              developing scalable, high-performance mobile and web applications.
              Expertise in React Native, React.js, TypeScript & app
              architecting. <br />
              <br /> Proven ability to optimize application performance, enhance
              user experience, and implement security best practices. Skilled in
              leading teams, mentoring developers, and driving scalable
              solutions.
            </p>
            <div>
              <Phone
                className="phone-icon"
                onClick={() => (window.location.href = `tel:${8136085426}`)}
              />
              <Mail
                className="mail-icon"
                onClick={() =>
                  (window.location.href = "mailto:yourmail@domain.com")
                }
              />
              <Github
                className="github-icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mohitkmr170",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
              <Linkedin
                className="linkedin-icon"
                onClick={() =>
                  window.open(
                    "https://github.com/mohitkmr170",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              />
            </div>
            <button
              className="download-button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume_mohit_fe_6_2025.pdf";
                link.download = "resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h1 className="skill-text">My Skills</h1>
        <div className="skill-details-text">
          I've worked with a range of technologies in the web development world,
          from front-end to back-end.
        </div>
        {renderSkillsCard()}
        <div className="show-more-cta">
          <button
            onClick={() => navigate("Projects")}
            className="download-button"
          >
            Show more
          </button>
        </div>
      </div>
    </>
  );
}
