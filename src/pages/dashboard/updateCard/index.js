import React from "react";
import "./style.css";
const UpdateCard = ({ updateData }) => {
  return (
    <section id="update-container">
      {updateData.map((update) => (
        <div key={update.id} className="update-card">
          <img src={update.img} alt="person-pic" className="update-img" />
          <div style={{ marginLeft: "15px" }}>
            <div>
              <div className="update-title">PACIENTE</div>
              <span className="update-name">{update.name}</span>
              <div>
                {update.tested ? (
                  <div className="update-complete">
                    <span>COMPLETOU O TESTE:</span>
                    <span style={{ fontWeight: "bold" }}>
                      {update.testName}
                    </span>
                  </div>
                ) : (
                  <div className="update-cancel">
                    <span>CANCELOU O TESTE:</span>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {update.testName}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <span className="update-date">REALIZADO EM: {update.date}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpdateCard;
