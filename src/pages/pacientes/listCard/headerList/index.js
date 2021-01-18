import React from "react";
import Header from "../../../../component/header";
import Seach from "../../../../component/search";
import TreeDots from "../../../../assets/icons/svg/treeDots.svg";
import "./style.css";

const HeaderList = ({ pacientsNumber }) => {
  return (
    <Header>
      <div className="to-center">
        <span className="header-pacient-list">
          Lista de Pacientes ({pacientsNumber})
        </span>
        <Seach placeholderTxt="Buscar paciente..." />
      </div>
      <div>
        <div id="tree-dots">
          <img src={TreeDots} alt="tree-dots" />
        </div>
      </div>
    </Header>
  );
};

export default HeaderList;
