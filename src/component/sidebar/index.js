import React from "react";
import { Link } from "react-router-dom";
import SelectEffect from "../../assets/images/selector.png";
import "./style.css";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <nav>
        <ul>
          <div ID="logo" className="to-center">
            LOGO
          </div>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/pacientes">Pacientes</Link>
          </li>
          <li>
            <Link to="/pacientes">Testes</Link>
          </li>
          <li>
            <Link to="/pacientes">Configurações</Link>
          </li>
        </ul>
      </nav>
      <img src={SelectEffect} alt="select" />
    </section>
  );
};

export default Sidebar;
