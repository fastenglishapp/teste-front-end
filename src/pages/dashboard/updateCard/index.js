import React from "react";
import "./style.css";
const UpdateCard = ({ updateData }) => {
  return (
    <section id="update-container">
      {updateData.map((update) => (
        <div key={update.id} className="update-card">
          <img alt="person-pic" />
          <div>
            <div>
              <span>PACIENTE</span>
              <span>NOME</span>
              <div>
                <span>COMPLETOU O TESTE</span>
                <span>TDCA</span>
              </div>
            </div>
            <div>
              <span>REALIZADO EM 12/12/12</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UpdateCard;
