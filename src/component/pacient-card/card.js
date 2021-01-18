import React from "react";

const Card = ({ card, children }) => {
  return (
    <div key={card.id} className="cards">
      <div className="img-card">
        {card.img && <img className="bg-card" src={card.img} alt="card-img" />}
        <img src={card.icon} alt="card-img" />
      </div>
      <div className="content-card">{children}</div>
    </div>
  );
};

export default Card;
