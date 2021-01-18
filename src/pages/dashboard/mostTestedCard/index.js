import React from "react";
import BtnRounded from "../../../component/btn-rounded";
import CardMostTested from "./cardMostTested";

import "./style.css";
const MostTestedCard = ({ mostTestedData }) => {
  return (
    <section id="most-tested">
      <CardMostTested card={mostTestedData}>
        <div>
          <div className="mostTested-title">description</div>
          <div className="mostTested-subtitle">resultData</div>
          <div>
            <span className="mostTested-title">13</span>

            <BtnRounded
              description="COMPRAR MAIS"
              bgColor="linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)"
              txtClass="mostTested-btn"
            />
          </div>
        </div>
      </CardMostTested>
    </section>
  );
};

export default MostTestedCard;
