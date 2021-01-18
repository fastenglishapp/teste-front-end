import React from "react";
import BtnRounded from "../../../component/btn-rounded";
import "./style.css";

const GeralInfoCard = ({ geralData }) => {
  return (
    <section id="geralCard-container">
      {geralData.map((geral) => (
        <>
          {" "}
          <div key={geral.id} className="geral-card text-style-poppins">
            <div className="geral-content-1">
              <img className="geral-icon" alt="icon" src={geral.icon} />
              <BtnRounded
                description={geral.percent}
                bgColor="#1CBF84"
                txtClass="geral-btn-txt"
              />
            </div>
            <div className="geralCard-number">{geral.NumberType}</div>
            <div className="geralCard-type ">{geral.type}</div>
            <CardTotal
              description={geral.description}
              totalNumber={geral.totalNumber}
            />
          </div>
        </>
      ))}
    </section>
  );
};

export default GeralInfoCard;

const CardTotal = ({ description, totalNumber }) => (
  <div className="card-total-effect">
    <div className="total-description">{description}</div>
    <div className="total-number">{totalNumber}</div>
  </div>
);
