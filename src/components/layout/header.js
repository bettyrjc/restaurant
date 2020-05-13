import React from "react";
import icons from "../styles/img/sprite.svg";
const header = (props) => {
  const { clicked, value } = props;
  return (
    <header class="header">
      <div class="header-menuicon">
        <svg class="header-menuicon-icon" id="menu">
          <use href={`${icons}#icon-menu`}></use>
        </svg>
      </div>
      <div class="header-logo" id="logo">
        Restauranta
      </div>
      <div class="header-search">
        <input
          id="search-input"
          class="header-search-input"
          type="text"
          placeholder="Busca tu comida..."
          value={value}
          onChange={clicked}
        />
        <svg class="header-search-icon" id="search-lupa">
          <use href={`${icons}#icon-search`}></use>
        </svg>
      </div>
      <ul class="header-navegation">
        <li>Carrito</li>
        <li>Favoritos</li>
        <li>Blog</li>
        <li class="pad-right-10">Delivery</li>
      </ul>
    </header>
  );
};
export default header;
