import React from "react";
import ContentContainer from "../../component/content-container";
import PacientCard from "../../component/pacient-card";
import GeralCard from "./GeralCard";
import MostTestedCard from "./mostTestedCard";
import UpdateCard from "./updateCard";
import BgCardImage from "../../assets/images/bgCardImage.png";
import "./style.css";

const Dashboard = () => {
  const geralData = [
    {
      id: 1,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
    {
      id: 2,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
    {
      id: 3,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
    {
      id: 4,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
  ];
  const pacientTestData = [
    {
      id: 1,
      img: BgCardImage,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
  ];

  const updateCardData = [
    {
      id: 1,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
    {
      id: 2,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
    {
      id: 3,
      name: "name",
      img: "",
      testedBy: "doutor",
      testDate: "10/12/20",
    },
  ];

  const mostTestedData = [
    {
      id: 1,
      img: BgCardImage,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
  ];

  return (
    <section id="dashboard">
      <ContentContainer title="Informações Gerais">
        <GeralCard geralData={geralData} />
      </ContentContainer>
      <div style={{ display: "flex" }}>
        <ContentContainer title="Histórico de atendimentos">
          <PacientCard cardData={pacientTestData} />
        </ContentContainer>
        <ContentContainer title="Teste mais realizado">
          <MostTestedCard mostTestedData={mostTestedData} />
        </ContentContainer>
      </div>
      <ContentContainer title="Atualizações importantes">
        <UpdateCard updateData={updateCardData} />
      </ContentContainer>
    </section>
  );
};

export default Dashboard;
