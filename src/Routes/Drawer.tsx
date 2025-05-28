import {
  BookCopy,
  Github,
  Home,
  Linkedin,
  Mail,
  Phone,
  X,
  FileCode2,
} from "lucide-react";
import "./styles.css";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface IProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const NAV_LINKS = [
  {
    name: "Articles",
    link: "/articles",
    icon: <BookCopy />,
  },
  {
    name: "Skills",
    link: "/skills",
    icon: <FileCode2 />,
  },
];

export function Drawer(props: IProps) {
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      props?.toggleDrawer();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      props?.toggleDrawer();
    }
  };

  useEffect(() => {
    if (props?.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props?.isOpen]);

  console.log(props?.isOpen);
  if (!props?.isOpen) return null;

  return (
    <div
      className={`drawer_container ${props?.isOpen ? "open" : ""}`}
      ref={sidebarRef}
    >
      <div className="drawer-top-container">
        <div>Navigation</div>
        <X cursor={"pointer"} onClick={props?.toggleDrawer} />
      </div>
      <div className="drawer-middle-container">
        {NAV_LINKS.map((item: any) => {
          return (
            <div
              className="drawer-middle-container-links"
              onClick={() => navigate(item?.link)}
            >
              {item?.icon}
              <div className="drawer-middle-container-text">{item?.name}</div>
            </div>
          );
        })}
      </div>
      <div className="drawer-bottom-container">
        <h4>Connect</h4>
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
    </div>
  );
}
