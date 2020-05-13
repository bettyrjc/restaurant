import React from "react";
import { Link } from "react-router-dom";
import icons from "../../styles/img/sprite.svg";

function footer() {
  return (
    <footer class="footer">
      <svg class="footer-icon">
        <use href={`${icons}#icon-instagram`}></use>
      </svg>
      <svg class="footer-icon">
        <use href={`${icons}#icon-facebook`}></use>
      </svg>
      <svg class="footer-icon">
        <use href={`${icons}#icon-twitter`}></use>
      </svg>
      <svg class="footer-icon">
        <use href={`${icons}#icon-whatsapp`}></use>
      </svg>
    </footer>
  );
}
export default footer;
