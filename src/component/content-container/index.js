import React from "react";
import BtnRounded from "../btn-rounded";
import "./style.css";
const ContentContainer = ({ children, title, btnTxt }) => {
  return (
    <section className="content-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="content-tile text-style-poppins">{title}</div>
        {btnTxt && (
          <BtnRounded
            description={btnTxt}
            bgColor="linear-gradient(93.05deg, #00A3FF 0%, #0057FF 100%)"
            txtClass="content-btn text-style-openSans"
          />
        )}
      </div>
      <div className="content-body">{children}</div>
    </section>
  );
};

export default ContentContainer;
