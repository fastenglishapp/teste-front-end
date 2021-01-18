import React from "react";
import "./style.css";
const BtnRounded = ({ description, bgColor, txtClass }) => {
  return (
    <div>
      <button className="btn-rounded" style={{ background: bgColor }}>
        <span className={`${txtClass}`}>{description}</span>
      </button>
    </div>
  );
};

export default BtnRounded;
