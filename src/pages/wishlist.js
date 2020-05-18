import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Card from "../components/commons/card/cardCart";
import Favoritos from "../components/commons/card/favorites";
class Wishlist extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main class="container">
          <div class="grilla">
            <div class="cards">
              <Card />
              <Card />
              <Card />
            </div>
            <div class="process">
              <div class="process-box">
                <div class="process-box-name">
                  <h3>Total Guardado</h3>
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
                <button class="process-btn fill">Comprar Todo</button>
              </Link>
            </div>
          </div>
          <div class="blog">
            <button class="delivery-btn">
              ¿Como preperar pollo agridulce?
            </button>
            <p class="delivery-text">En nuestro blog, hay recetas</p>
          </div>
          <Favoritos title="Favoritos" />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Wishlist;
