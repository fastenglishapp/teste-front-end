import React from "react";
import ContentContainer from "../../component/content-container";
import PacientCard from "../../component/pacient-card";
import GeralInfoCard from "./GeralInfoCard";
import MostTestedCard from "./mostTestedCard";
import UpdateCard from "./updateCard";
import BgCardImage from "../../assets/images/bgCardImage.png";
import Person from "../../assets/icons/svg/person.svg";
import BrainIcon from "../../assets/icons/svg/brain.svg";
import Tube from "../../assets/icons/svg/tube.svg";
import OctagonIcon from "../../assets/icons/svg/octagon.svg";
import UserRenata from "../../assets/images/userRenata.png";
import UserCarlos from "../../assets/images/userCarlos.png";
import UserSuelton from "../../assets/images/userSuelton.png";

import "./style.css";

const Dashboard = () => {
  const geralInfoData = [
    {
      id: 1,
      icon: Person,
      percent: "+30%",
      colorStatus: "red",
      NumberType: 26,
      type: "Pacientes ativos",
      description: "Pacientes totais",
      totalNumber: 268,
    },
    {
      id: 1,
      icon: Tube,
      percent: "+30%",
      colorStatus: "red",
      NumberType: 306,
      type: "Testes realizados",
      description: "Testes totais",
      totalNumber: 1.265,
    },
    {
      id: 1,
      icon: Person,
      percent: "+30%",
      colorStatus: "red",
      NumberType: 139,
      type: "Testes concluídos",
      description: "Testes totais concluídos",
      totalNumber: 10.55,
    },
    {
      id: 1,
      icon: Tube,
      percent: "+30%",
      colorStatus: "red",
      NumberType: 11,
      type: "Testes cancelados",
      description: "Testes totais cancelados",
      totalNumber: 618,
    },
  ];
  const pacientHistoricoData = [
    {
      id: 1,
      img: BgCardImage,
      icon: BrainIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      icon: OctagonIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      icon: BrainIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      icon: OctagonIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      icon: OctagonIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
    {
      id: 1,
      img: BgCardImage,
      icon: OctagonIcon,
      name: "Renata Augusto Ferreira",
      testName: "TDAH CAB ADHD ",
      testDate: "10/12/20",
    },
  ];

  const updateCardData = [
    {
      id: 1,
      name: "Renata Augusto Ferreira",
      img: UserRenata,
      tested: true,
      testName: "TDAH CAB ADHD",
      date: "20/10/23",
    },
    {
      id: 2,
      name: "Carlos Nobrega Baccio",
      img: UserCarlos,
      tested: false,
      testName: "TDAH CAB ADHD",
      date: "20/10/23",
    },
    {
      id: 3,
      name: "Suelton A. Mellis",
      img: UserSuelton,
      tested: true,
      testName: "TDAH CAB ADHD",
      date: "20/10/23",
    },
  ];

  const mostTestedData = {
    id: 1,
    icon: OctagonIcon,
    name: "Renata Augusto Ferreira",
    testName: "TDAH CAB ADHD ",
    testDate: "10/12/20",
  };

  return (
    <section id="dashboard">
      <ContentContainer title="Informações Gerais">
        <GeralInfoCard geralData={geralInfoData} />
      </ContentContainer>
      <div style={{ display: "flex" }}>
        <ContentContainer title="Histórico de atendimentos" btnTxt="VER TODOS">
          <PacientCard cardData={pacientHistoricoData} />
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
