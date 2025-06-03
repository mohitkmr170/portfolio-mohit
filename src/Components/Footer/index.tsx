import { Github, Hand, Linkedin, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router";
import "./styles.css";

const Footer = () => {
  let navigate = useNavigate();

  return (
    <div className="home-footer">
      <div className="home-footer-top-container">
        <div>
          <div className="read-more-text">Let's connect</div>
          <div
            className="project-card-external-link-container article-read-more-container"
            onClick={() => navigate("Contact")}
          >
            <div className="read-more-text">Say hi!</div>
            <Hand color="#ffffff" />
          </div>
        </div>
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
      </div>
      <div className="home-footer-bottom-container">
        © 2025 by Mohit Kumar. All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
