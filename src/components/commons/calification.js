import React from "react";
import icons from "../styles/img/sprite.svg";
function calification() {
  return (
    <div className="card-box-calification">
      <h3 className="card-box-secondary">Clasificacion</h3>
      <div className="card-box-calification-stars">
        <svg className="card-box-calification-stars-icon">
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <svg className="card-box-calification-stars-icon">
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <svg className="card-box-calification-stars-icon">
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <svg className="card-box-calification-stars-icon">
          <use href={`${icons}#icon-star`}></use>
        </svg>
        <svg className="card-box-calification-stars-icon">
          <use href={`${icons}#icon-star`}></use>
        </svg>
      </div>
    </div>
  );
}
export default calification;
