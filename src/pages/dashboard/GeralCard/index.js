import React from "react";
import "./style.css";
const GeralCard = ({ geralData }) => {
  return (
    <section id="geralCard-container">
      {geralData.map((geral) => (
        <div key={geralData.id} className="geral-card">
          gera data
        </div>
      ))}
    </section>
  );
};

export default GeralCard;
