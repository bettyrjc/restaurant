import React, { Component } from "react";

import Calification from "../calification";

class FoodCard extends Component {
  render() {
    const {
      strMealThumb,
      strMeal,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient6,
      strIngredient5,
    } = this.props.food;
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div className="card-box">
            <h3 className="card-box-title">{strMeal}</h3>
            <p className="card-box-text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leaps
            </p>
            <Calification />
            <div className="card-box-ingredients">
              <h3 className="card-box-secondary">Ingredientes</h3>
              <button className="card-box-ingredients-btn outline">
                {strIngredient1}
              </button>
              <button className="card-box-ingredients-btn outline">
                {strIngredient2}
              </button>
              <button className="card-box-ingredients-btn outline">
                {strIngredient3}
              </button>
              <button className="card-box-ingredients-btn outline">
                {strIngredient5}
              </button>
              <button className="card-box-ingredients-btn outline">
                {strIngredient6}
              </button>
            </div>
            <div className="card-box-price">
              <h3 className="card-box-secondary">Precio</h3>
              <h1 className="card-box-price-number">$24,99</h1>
            </div>
            <div className="card-box-btns">
              <button className="card-box-btns-btn fill">Ordenar</button>
              <button className="card-box-btns-btn outline">
                Agregar a Bolsa
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FoodCard;
