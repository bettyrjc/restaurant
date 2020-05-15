import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/img/sprite.svg";

function footer() {
  return (
    <footer className="footer">
      <Link to="instagram.com">
        <svg className="footer-icon">
          <use href={`${icons}#icon-instagram`}></use>
        </svg>
      </Link>
      <svg className="footer-icon">
        <use href={`${icons}#icon-facebook`}></use>
      </svg>
      <svg className="footer-icon">
        <use href={`${icons}#icon-twitter`}></use>
      </svg>
      <svg className="footer-icon">
        <use href={`${icons}#icon-whatsapp`}></use>
      </svg>
    </footer>
  );
}
export default footer;
