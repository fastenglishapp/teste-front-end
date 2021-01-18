import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SelectEffect from "../../assets/images/selector.png";
// import Home from "../../assets/icons/svg/home.svg";
// import Open from "../../assets/icons/svg/open.svg";
import "./style.css";
import HomeIcon from "../../assets/icons/svg/home";
import OpenIcon from "../../assets/icons/svg/open";
import LogoIcon from "../../assets/icons/svg/logo.svg";
import LogoLetter from "../../assets/icons/image/IDENTLOGO.png";

const Sidebar = () => {
  useEffect(() => {
    moveSelect("home-link");
  }, []);

  const moveSelect = (selected) => {
    var elementSidebar = document.getElementById(selected);
    var elementSelector = document.getElementById("sidebar-select");
    var topPos = elementSidebar.offsetTop;
    if (topPos) {
      elementSelector.style.transition = "all 0.5s";
      elementSelector.style.top = `${topPos}px`;
      elementSidebar.style.color = `#303B5B`;
    }
  };
  return (
    <section id="sidebar">
      <nav>
        <ul>
          <div ID="logo" className="to-center">
            <img src={LogoIcon} alt="logo-icon" />
            <img src={LogoLetter} alt="logo-icon" />
          </div>
          <li onClick={() => moveSelect("home-link")} id="home-link">
            <NavLink
              exact
              to="/"
              className="link-style"
              activeClassName="selected-link"
            >
              <span>
                <HomeIcon />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li onClick={() => moveSelect("pacient-link")} id="pacient-link">
            <NavLink
              exact
              to="/pacientes"
              className="link-style"
              activeClassName="selected-link"
            >
              <span>
                <OpenIcon strokeColor="blue" />
              </span>
              Pacientes
            </NavLink>
          </li>
          <li onClick={() => moveSelect("test-link")} id="test-link">
            <NavLink
              exact
              to="/test"
              className="link-style"
              activeClassName="selected-link"
            >
              <span>
                <OpenIcon strokeColor="blue" />
              </span>
              Testes
            </NavLink>
          </li>
          <li onClick={() => moveSelect("config-link")} id="config-link">
            <NavLink
              exact
              to="/config"
              className="link-style"
              activeClassName="selected-link"
            >
              <span>
                <OpenIcon strokeColor="blue" />
              </span>
              Configurações
            </NavLink>
          </li>
        </ul>
      </nav>
      <img src={SelectEffect} alt="select" id="sidebar-select" />
    </section>
  );
};

export default Sidebar;
