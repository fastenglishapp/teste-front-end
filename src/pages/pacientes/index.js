import React from "react";
import ContentContainer from "../../component/content-container";
import PacientCard from "../../component/pacient-card";
import BgCardImage from "../../assets/images/bgCardImage.png";
import BrainIcon from "../../assets/icons/svg/brain.svg";
import OctagonIcon from "../../assets/icons/svg/octagon.svg";
import UserRenata from "../../assets/images/userRenata.png";
import ListCard from "./listCard";
import "./style.css";
const Pacientes = () => {
  const pacientUpdate = [
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
  ];
  const listData = [
    {
      id: 1,
      name: "Renata Augusto Ferreira",
      img: UserRenata,
      diagnosis: "TDAH CAB ADHD, Autismo",
      testDone: 3,
      testCancel: 1,
      testPending: 0,
    },
    {
      id: 1,
      name: "Renata Augusto Ferreira",
      img: UserRenata,
      diagnosis: "TDAH CAB ADHD, Autismo",
      testDone: 3,
      testCancel: 1,
      testPending: 0,
    },
    {
      id: 1,
      name: "Renata Augusto Ferreira",
      img: UserRenata,
      diagnosis: "TDAH CAB ADHD, Autismo",
      testDone: 3,
      testCancel: 1,
      testPending: 0,
    },
  ];
  return (
    <section id="pacientes">
      <ContentContainer title="atualizações de pacientes">
        <PacientCard cardData={pacientUpdate} />
      </ContentContainer>
      <ContentContainer title="Todos os pacientes">
        <ListCard listData={listData} />
      </ContentContainer>
    </section>
  );
};

export default Pacientes;
