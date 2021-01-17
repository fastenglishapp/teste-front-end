import React from "react";
import SearchIcon from "../../assets/icons/svg/Vector.svg";
import "./style.css";
const Seach = ({ placeholderTxt }) => {
  return (
    <div className="search-header">
      <img src={SearchIcon} alt="searchIcon" />
      <input placeholder={placeholderTxt} />
    </div>
  );
};

export default Seach;
