import React from "react";

import Calification from "../calification";

function cardCart() {
  return (
    <div class="cards-card">
      <div class="cards-card-image">
        <img
          src="https://www.miabuelitadice.com/wp-content/uploads/2019/01/pollo-agridulce-750x460.jpg"
          alt="pollo agridulce"
        />
      </div>
      <div class="cards-card-box">
        <h3 class="cards-card-box-title">Pollo Agridulce</h3>

        <p class="cards-card-box-text">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leaps
        </p>
        <Calification />
        <div class="cards-card-box-ingredients">
          <h3 class="cards-card-box-secondary">Ingredientes</h3>
          <button class="cards-card-box-ingredients-btn outline">Pollo</button>
          <button class="cards-card-box-ingredients-btn outline">Vino</button>
          <button class="cards-card-box-ingredients-btn outline">Huevo</button>
          <button class="cards-card-box-ingredients-btn outline">
            Vegetales
          </button>
          <button class="cards-card-box-ingredients-btn outline">Azucar</button>
        </div>

        <div class="cards-card-box-price">
          <h3 class="cards-card-box-secondary">Precio</h3>
          <h1 class="cards-card-box-price-number">$24,99</h1>
        </div>
        <div class="cards-card-box-btns">
          <button class="cards-card-box-btns-btn fill">Ordenar</button>
          <button class="cards-card-box-btns-btn outline">
            Agregar a Bolsa
          </button>
        </div>
      </div>
    </div>
  );
}
export default cardCart;
