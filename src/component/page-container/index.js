import React from "react";
import Header from "../header";
import Seach from "../search";
import "./style.css";
const PageContainer = ({ children }) => {
  return (
    <main id="page-container">
      <div id="page-content">
        <Header>
          <div>
            <Seach placeholderTxt="Busca..." />
          </div>
          <div>
            <div>conteudo</div>
          </div>
        </Header>
        {children}
      </div>
    </main>
  );
};

export default PageContainer;
