import React from "react";
import "./style.css";
const CardMostTested = ({ card, children }) => {
  return (
    <div key={card.id} className="cards-most-tested">
      <div className="img-most-tested">
        {card.img && <img className="bg-card" src={card.img} alt="card-img" />}
        <img src={card.icon} alt="card-most-tested" />
      </div>
      <div className="content-card">{children}</div>
    </div>
  );
};

export default CardMostTested;
