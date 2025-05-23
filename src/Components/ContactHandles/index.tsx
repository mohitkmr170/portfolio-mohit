import "./styles.css";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function ContactHandles() {
  return (
    <div>
      <Phone
        className="phone-icon"
        onClick={() => (window.location.href = `tel:${8136085426}`)}
      />
      <Mail
        className="mail-icon"
        onClick={() => (window.location.href = "mailto:yourmail@domain.com")}
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
  );
}
