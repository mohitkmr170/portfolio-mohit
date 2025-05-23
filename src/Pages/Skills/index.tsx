import "./styles.css";

const SKILLS = [
  {
    type: "🚀 Technical Skills",
    skills: [
      "React Native (Android & iOS)",
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    type: "🛠️ Tools",
    skills: [
      "Git/Github",
      "Bitbucket",
      "Linux",
      "Figma",
      "AdobeXD",
      "ESLint, TSLint, SonarLint",
    ],
  },
  {
    type: "📊 Performance & Security",
    skills: [
      "App Performance Optimization",
      "Lazy Loading, Code Splitting, SEO",
      "Firebase, Dynatrace, App Security",
    ],
  },
  {
    type: "⛁ State Management",
    skills: ["Redux", "MobX", "Context API"],
  },
  {
    type: "⚙️ DevOps & CI/CD",
    skills: [
      "GitHub Actions",
      "Fastlane",
      "Bitrise",
      "Vercel",
      "App Store & Play Store Deployments",
    ],
  },
  {
    type: "🌐 Cloud & Backend Services",
    skills: ["REST APIs", "GraphQL(Apollo client)", "Firebase", "AWS Amplify"],
  },
];

const renderSkillsListItem = (item: any) => {
  return (
    <ul>
      <h1>{item?.type}</h1>
      {item?.skills.map((innerItem: any) => {
        return <li className="skills-li">{innerItem}</li>;
      })}
    </ul>
  );
};

export function Skills() {
  return (
    <div className="skills-screen-container">
      <h1 className="skills-screen-title">My Skills</h1>
      <p>
        {" "}
        I bring extensive experience in working across a wide range of
        technologies, specializing in both mobile and web front-end development.
        My expertise spans the entire product lifecycle—from initial concept and
        UI design to deployment and optimization—enabling me to contribute
        effectively to end-to-end product development.
      </p>
      {SKILLS.map(renderSkillsListItem)}
    </div>
  );
}
