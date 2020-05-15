import React from "react";
import icons from "../styles/img/sprite.svg";
import { Link } from "react-router-dom";

const header = (props) => {
  const { clicked, value } = props;
  return (
    <header className="header">
      <div className="header-menuicon">
        <svg className="header-menuicon-icon" id="menu">
          <use href={`${icons}#icon-menu`}></use>
        </svg>
      </div>
      <Link to="/">
        <div className="header-logo" id="logo">
          Restauranta
        </div>
      </Link>
      <div className="header-search">
        <input
          id="search-input"
          className="header-search-input"
          type="text"
          placeholder="Busca tu comida..."
          value={value}
          onChange={clicked}
        />
        <svg className="header-search-icon" id="search-lupa">
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </div>
      <ul className="header-navegation">
        <li>
          <Link to="/comidas">Carta</Link>
        </li>
        <li>Carrito</li>
        <li>Favoritos</li>
        <li>Blog</li>
        <li className="pad-right-10">Delivery</li>
      </ul>
    </header>
  );
};
export default header;
