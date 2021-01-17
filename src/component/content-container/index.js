import React from "react";
import "./style.css";
const ContentContainer = ({ children, title }) => {
  return (
    <section className="content-container">
      <div className="Xmedium-txt-size content-tile">{title}</div>
      <div className="content-body">{children}</div>
    </section>
  );
};

export default ContentContainer;
