import React from "react";
import { Link } from "react-router-dom";
import icons from "../styles/images/icons/sprite.svg";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-description">
        <h3 className="footer-description-title">Tu comida</h3>
        <ul className="footer-description-list">
          <Link to="/">
            <li>Comida Rapida</li>
          </Link>
          <Link to="/">
            <li>Comida Casera</li>
          </Link>
          <Link to="/">
            <li>Comida Gourmet</li>
          </Link>
          <Link to="/">
            <li>Recetas</li>
          </Link>
        </ul>
      </div>
      <div className="footer-redes">
        <Link to="/">
          <svg className="footer-redes-icon">
            <use href={`${icons}#icon-instagram`} />
          </svg>
        </Link>
        <Link to="/">
          <svg className="footer-redes-icon">
            <use href={`${icons}#icon-facebook`} />
          </svg>
        </Link>
        <Link to="/">
          <svg className="footer-redes-icon">
            <use href={`${icons}#icon-phone`} />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
export default footer;
