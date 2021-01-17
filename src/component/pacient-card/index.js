import React from "react";
import "./style.css";
const PacientCard = ({ cardData }) => {
  return (
    <div className="pacient-container">
      {cardData.map((card) => (
        <div id={card.id} className="cards">
          <div className="img-card">
            <image src={card.img} />
          </div>
          <div className="content-card">
            <div>{card.name}</div>
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default PacientCard;

const TxtDescription = ({ description, resultData }) => (
  <div>
    <div>{description}</div>
    <div>{resultData}</div>
  </div>
);
