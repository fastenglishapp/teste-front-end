import React from "react";
import Header from "../../../../component/header";
import Seach from "../../../../component/search";

const HeaderList = ({ pacientsNumber }) => {
  return (
    <Header>
      <div className="to-center">
        <span className="normal-txt-size">
          Lista de Pacientes {pacientsNumber}
        </span>
        <Seach placeholderTxt="Buscar paciente..." />
      </div>
      <div>
        <div>conteudo</div>
      </div>
    </Header>
  );
};

export default HeaderList;
