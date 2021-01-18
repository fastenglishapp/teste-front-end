import React from "react";
import Card from "./card";
import "./style.css";

const PacientCard = ({ cardData }) => {
  return (
    <div className="pacient-container">
      {cardData.map((card) => (
        <Card card={card}>
          <div className="pacient-name">{card.name}</div>
          <div>
            <TxtDescription
              description="TESTE REALIZADO"
              resultData={card.testName}
            />
            <TxtDescription
              description="REALIZADO EM:"
              resultData={card.testDate}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PacientCard;

const TxtDescription = ({ description, resultData }) => (
  <div>
    <div className="pacient-txt-description">{description}</div>
    <div className="pacient-txt-resultData">{resultData}</div>
  </div>
);
