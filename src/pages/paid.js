import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Favoritos from "../components/commons/card/favorites";
import Calification from "../components/commons/calification";
class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main class="container">
          <div class="grilla">
            <div class="cards">
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
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leaps
                  </p>
                  <Calification />

                  <div class="cards-card-box-ingredients">
                    <h3 class="cards-card-box-secondary">Ingredientes</h3>
                    <button class="cards-card-box-ingredients-btn outline">
                      Pollo
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Vino
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Huevo
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Vegetales
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Azucar
                    </button>
                  </div>

                  <div class="cards-card-box-price">
                    <h3 class="cards-card-box-secondary">Precio</h3>
                    <h1 class="cards-card-box-price-number">$24,99</h1>
                  </div>
                </div>
              </div>
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
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leaps
                  </p>
                  <Calification />

                  <div class="cards-card-box-ingredients">
                    <h3 class="cards-card-box-secondary">Ingredientes</h3>
                    <button class="cards-card-box-ingredients-btn outline">
                      Pollo
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Vino
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Huevo
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Vegetales
                    </button>
                    <button class="cards-card-box-ingredients-btn outline">
                      Azucar
                    </button>
                  </div>

                  <div class="cards-card-box-price">
                    <h3 class="cards-card-box-secondary">Precio</h3>
                    <h1 class="cards-card-box-price-number">$24,99</h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="process">
              <div class="process-box">
                <div class="process-box-name">
                  <h3>Pagar</h3>
                </div>
                <div class="process-box-description">
                  <div class="process-box-description-name">
                    <p>CANT.</p>
                    <p>TOTAL</p>
                  </div>
                  <div class="process-box-description-text">
                    <p class="pad-left-10">3</p>
                    <p>$74,99</p>
                  </div>
                </div>
              </div>
              <Link to="/carrito/paso-uno">
                <button class="process-btn fill">Procesar Pago</button>
              </Link>
            </div>
          </div>
          <Favoritos title="Te provova" />
          <div class="delivery">
            <h3 class="delivery-h3">
              Por una compra de màs de 60$ el delivery te sale gratis
            </h3>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Cart;
