import {
  Briefcase,
  Cloud,
  CodeXml,
  LocateIcon,
  Settings,
  UniversityIcon,
} from "lucide-react";
import { balance, darden, hdfc, khataBook, mpl, sprive } from "../Assets";

const XP = [
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

const PROJECTS = [
  {
    projectName: "HDFC",
    details:
      "Next-Generation Fintech Banking App – A Successor to HDFC's Digital Platform",
    myContribution: [
      "Spearheading the development of HDFC’s next-gen mobile app, leading a team of 4 frontend engineers.",
      "Architected and implemented secure, reusable components, integrating RASP security, Lookout APIs, and other security measures.",
      "Upgraded the app to the latest React Native version, following a Micro Frontend architecture.",
      "Integrated Dynatrace, DevRev, Firebase Crashlytics, and other third-party services for app monitoring.",
    ],
    techStack: ["React Native", "Redux", "Firebase", "Micro-Frontend"],
    thumbNail: hdfc,
    accessibility: "private",
    timeline: "July 2023 – Present",
    role: "Frontend Lead",
  },
  {
    projectName: "DARDEN",
    details:
      "A Monorepo architectured food ordering application for both Mobile and Web build using NativeBase, React Native and NextJS, for 9 different brands. I was IC as well as leading FE team of 11 members.",
    myContribution: [
      "Led a 11-member frontend team, driving architecture, development, and best practices in React Native & Next.js.",
      "Designed and implemented a monorepo architecture, enhancing cross-platform code reuse and development efficiency, leveraging native-base as the UI component library and MobX for state management",
      "Improved app startup time and rendering speed, integrating native bridges and optimized animations.",
    ],
    techStack: ["NextJS", "React Native", "TS", "MobX", "Azure", "NativeBase"],
    thumbNail: darden,
    accessibility: "private",
    timeline: "Nov 2021 – Jun 2023",
    role: "Frontend Lead",
  },
  {
    projectName: "BALANCE",
    details:
      "An Online payments mobile application for middle eastern countries, with multiple merchant supports, rewards. Worked on consumer facing Mobile app as well as merchant & admin dashboard",
    myContribution: [
      "Developed payment processing mobile app using React Native, ensuring seamless UI/UX with RN-elements & RN-paper.",
      "Implemented biometric authentication, transaction history, referral program, and Stripe-based payment integration.",
    ],
    techStack: [
      "React Native",
      "ReactJS",
      "Hooks",
      "Redux-Saga",
      "OneSignal",
      "CI/CD",
    ],
    thumbNail: balance,
    accessibility: "private",
    timeline: "Nov 2020 – Oct 2021",
    role: "Senior Software Engineer",
  },
  {
    projectName: "KHATABOOK",
    details:
      "An Admin web Dashboard & SA mobile app for handling Merchant and Sales associates, handling task assignment and related stuff. IC in Web and leading Mobile team.",
    myContribution: [
      "Led a 3-member frontend mobile team, streamlining CI/CD pipelines for automated App Store & Play Store deployments.",
      "Developed an admin portal using React.js & GraphQL(where an admin can perform crud operations for all users, view their uploaded documents, approve/reject their KYC), boosting Lighthouse score from 70 to 95+, enhancing performance & SEO.",
    ],
    techStack: [
      "React Native",
      "ReactJS",
      "GQL(Apollo client)",
      "Firebase",
      "AntD",
      "Deployment",
    ],
    thumbNail: khataBook,
    accessibility: "private",
    timeline: "Jan 2020 – Oct 2020",
    role: "Senior Software Engineer",
  },
  {
    projectName: "SPRIVE",
    details:
      "An Online UK-Based Mortgage handling App, that let’s user help to repay their Mortgage in a term shorter that Projected time, to save money which they pay as Interest.",
    myContribution: [
      "Worked as IC in developing a mortgage repayment application using react native, redux and firebase following best coding practices. Integarted complex third-party - Truelayer, sentry, re-animated for handling complex animations, and appstore and playstore deployments(using bitrise).",
      "Interacted with design and backed team for optimised approach and seamless delivery of the product.",
    ],
    techStack: [
      "React Native",
      "React JS",
      "Hooks",
      "Bitrise CI/CD",
      "OneSignal",
      "TrueLayer",
    ],
    thumbNail: sprive,
    accessibility: "private",
    timeline: "Mar 2019 – Dec 2019",
    role: "Software Engineer",
  },
  {
    projectName: "MPL",
    details:
      "A cross-platform mobile application that allows skill-based e-Sports options in app where you can play your favourite mobile games and win rewards.",
    myContribution: [
      "Involved in developing reusable UI components(w.r.t AdobeXD), integrating REST api’s, firebase services and state management for Dashboard, profile, leaderboard and referral flows.",
      "Developed reusable UI components, optimized FlatList for large datasets, and integrated push notifications using OneSignal.",
    ],
    techStack: [
      "React Native",
      "Native(Android/IOS)",
      "Redux Thunk",
      "Firebase",
    ],
    thumbNail: mpl,
    accessibility: "private",
    timeline: "Oct 2018 – Feb 2019",
    role: "Software Engineer",
  },
];

export { XP, SKILLS, PROJECTS };
