import React, { useState } from "react";
import Header from "../header";
import Seach from "../search";
import UserImg from "../../assets/images/userImg.png";
import Bell from "../../assets/icons/svg/bell.svg";
import Config from "../../assets/icons/svg/config.svg";
import Squads from "../../assets/icons/svg/squads.svg";
import ExitIcon from "../../assets/icons/svg/exit.svg";

import "./style.css";

const PageContainer = ({ children }) => {
  const [showUserOptions, setShowUserOptions] = useState(false);
  return (
    <main id="page-container">
      <div id="page-content">
        <Header>
          <div>
            <Seach placeholderTxt="Busca..." />
          </div>
          <div className="user-content">
            <div style={{ position: "relative" }}>
              <img className="icon-svg" src={Config} alt="icon" />
              <span className="bell-dot"></span>
            </div>
            <img className="icon-svg" src={Bell} alt="icon" />
            <button
              id="user-btn"
              onClick={() => setShowUserOptions(!showUserOptions)}
              onBlur={() => setShowUserOptions(false)}
            >
              <span>
                Olá,<span style={{ fontWeight: " bold" }}> Felipe</span>
              </span>

              <img className="user-img" src={UserImg} alt="user-pic" />
              {showUserOptions && <UserOptions />}
            </button>
            <img className="icon-svg" src={Squads} alt="icon" />
          </div>
        </Header>
        {children}
      </div>
    </main>
  );
};

export default PageContainer;

const UserOptions = () => (
  <div id="user-options">
    <div>Minha conta</div>
    <div>Configurações</div>
    <div>
      <span>
        <img src={ExitIcon} alt="exit" />
      </span>
      <span>Sair</span>
    </div>
  </div>
);
