import React from "react";
import HeaderList from "./headerList";
import "./style.css";
const ListCard = ({ listData }) => {
  return (
    <div>
      <HeaderList pacientsNumber={listData.length} />
      <div className="list-container">
        {listData.map((list) => (
          <div className="list">list</div>
        ))}
      </div>
    </div>
  );
};

export default ListCard;
