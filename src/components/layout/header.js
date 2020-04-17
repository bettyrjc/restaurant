import React from "react";
import icons from "../styles/images/icons/sprite.svg";
// import Search from "./Search";
const header = (props) => {
  const { clicked, value } = props;
  return (
    <header className="header">
      <div className="header-logo">
        <svg className="header-logo-icon">
          <use href={`${icons}#icon-align-justify`} />
        </svg>
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Buscar..."
          id="search"
          value={value}
          onChange={clicked}
        />
      </div>
      <div className="header-navegation">
        <svg className="header-navegation-icon">
          <use href={`${icons}#icon-heart`} />
        </svg>
        <svg className="header-navegation-icon">
          <use href={`${icons}#icon-mail`} />
        </svg>
        <svg className="header-navegation-icon">
          <use href={`${icons}#icon-shopping-cart`} />
        </svg>
      </div>
    </header>
  );
};
export default header;
