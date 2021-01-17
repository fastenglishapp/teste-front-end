import React from "react";
import PageContainer from "../../component/page-container";

import Sidebar from "../../component/sidebar";
import Routes from "../../routes";
import "./style.css";

const mainPage = () => {
  return (
    <section id="main-container">
      <Sidebar />
      <PageContainer>
        <Routes />
      </PageContainer>
    </section>
  );
};

export default mainPage;
