import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const URL = window.location.pathname.split("/")[1];

  const [active, setActive] = useState("Navbar--menu");
  const [toggleIcon, setToggleIcon] = useState("nav--toggle");
  const [activeBackground, setActiveBackground] =
    useState("Navbar--background");
  const navToggle = () => {
    active === "Navbar--menu"
      ? setActive("Navbar--menu  nav--active ")
      : setActive("Navbar--menu");

    toggleIcon === "nav--toggle"
      ? setToggleIcon("nav--toggle toggle")
      : setToggleIcon("nav--toggle");

    activeBackground === "Navbar--background"
      ? setActiveBackground("Navbar--background Navbar--background--active ")
      : setActiveBackground("Navbar--background");
  };

  return (
    <div>
      <nav className={`Navbar--container ${activeBackground}`}>
        <ul className={active}>
          <li
            className={
              URL === "home"
                ? "hover-underline-animation-stay"
                : "hover-underline-animation"
            }
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </li>
          <li
            className={
              URL === "about"
                ? "hover-underline-animation-stay"
                : "hover-underline-animation"
            }
            onClick={() => {
              navigate("/about");
            }}
          >
            AboutMe
          </li>
          <li
            className={
              URL === "degree"
                ? "hover-underline-animation-stay"
                : "hover-underline-animation"
            }
            onClick={() => {
              navigate("/degree");
            }}
          >
            Degree
          </li>
          <li
            className={
              URL === "contact"
                ? "hover-underline-animation-stay"
                : "hover-underline-animation"
            }
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Header;
