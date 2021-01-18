import React from "react";
import BtnRounded from "../../../component/btn-rounded";
import HeaderList from "./headerList";
import EditIcon from "../../../assets/icons/svg/edit.svg";
import "./style.css";
const ListCard = ({ listData }) => {
  return (
    <div>
      <HeaderList pacientsNumber={listData.length} />
      <div className="list-container">
        {listData.map((list) => (
          <div className="list">
            <span>
              <img src={list.img} className="list-img" alt="user-img" />
            </span>
            <span className="list-content">
              <div className="list-title">{list.name}</div>
              <div className="list-diagnosis">DIAGNÓSTICO</div>
              <div className="list-diagnosis-result">{list.diagnosis}</div>
            </span>
            <BoxContent
              number={list.testDone}
              description="Testes realizados"
              color=" #1EAC79"
            />
            <BoxContent
              number={list.testCancel}
              description="Testes cancelados"
              color="#EF0C35"
            />
            <BoxContent
              number={list.testPending}
              description="Testes pendentes"
              color="#FF6B00"
            />
            <ButtonContent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListCard;

const BoxContent = ({ number, description, color }) => (
  <div style={{ color: `${color}` }} className="box-content">
    <div className="box-number">{number}</div>
    <div className="box-description">{description}</div>
  </div>
);

const ButtonContent = () => (
  <div
    className="button-content"
    style={{ display: "flex", alignItems: "center" }}
  >
    <span className="pacient-edit">
      <img src={EditIcon} alt="edit-icon" />
    </span>
    <BtnRounded
      description="ENVIAR NOVO TESTE"
      bgColor="linear-gradient(93.05deg, #FF00C7 0%, #FF005C 100%)"
      txtClass="pacient-btn"
    />
    <BtnRounded
      description="ALTERAR CADASTRO"
      bgColor="linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)"
      txtClass="pacient-btn"
    />
  </div>
);
