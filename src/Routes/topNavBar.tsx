import { Bell, X, Menu } from "lucide-react";
import "./styles.css";
import { NavLink, useNavigate } from "react-router";
import { personalLogo } from "../Assets";
import { useState } from "react";
import { Drawer } from "./Drawer";

const navTabs = [
  { to: "/", name: "HOME" },
  { to: "/projects", name: "PROJECTS" },
  { to: "/about", name: "ABOUT" },
  { to: "/contact", name: "CONTACT" },
];

export function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  let navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  function notifincationBanner() {
    return (
      <div className="notification-container">
        <Bell color="#ffffff" />
        <h3 className="notification-text">Announcement banner</h3>
        <X color="#ffffff" />
      </div>
    );
  }

  function tabContainer() {
    return (
      <div className="tab-container">
        <div className="name-container" onClick={() => navigate("/")}>
          <img
            src={personalLogo}
            alt={personalLogo}
            className="tab-bar-name-logo"
          />
          <div className="tab-bar-name-text">Mohit Kumar</div>
        </div>
        <div className="tab-inner-container">
          {navTabs.map((tab) => {
            return (
              <NavLink
                style={{ textDecoration: "none" }}
                to={tab?.to}
                className={({ isActive }) =>
                  `${isActive ? "active-tab" : "inactive-text"}`
                }
              >
                <div className="tab-text">{`${tab?.name}`}</div>
              </NavLink>
            );
          })}
        </div>
        <div className="menu-icon-container">
          <Menu onClick={toggleDrawer} />
        </div>
        <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    );
  }

  return (
    <div className="navbar-container">
      {bannerOpen && notifincationBanner()}
      {tabContainer()}
    </div>
  );
}
