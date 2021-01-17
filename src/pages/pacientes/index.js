import React from "react";
import ContentContainer from "../../component/content-container";
import PacientCard from "../../component/pacient-card";
import ListCard from "./listCard";
import "./style.css";
const Pacientes = () => {
  const pacientUpdate = [
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
  const listData = [
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
