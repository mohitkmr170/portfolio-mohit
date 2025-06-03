import ContactHandles  from "../../Components/ContactHandles";
import AutoHScrollList from "../../Components/AutoHScrollList";
import { personalImage } from "../../Assets";
import { XP } from "../../Config";
import { useLocation } from "react-router";

export function IntroSection() {
  const location = useLocation();

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
      {location?.pathname === "/" && <AutoHScrollList />}
      <div className="about-container">
        {location?.pathname === "/" && (
          <h1 className="about-me-text">About Me</h1>
        )}
        <div className="about-inner-container">
          <div className="xp-container">{XP.map(renderXp)}</div>
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
            <ContactHandles />
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
    </>
  );
}
