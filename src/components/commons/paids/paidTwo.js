import React, { Component } from "react";

import Header from "../../layout/header";
import Footer from "../../layout/footer";
class paidTwo extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main class="container ticket-container">
          <div class="process-bar-container ticket-bar">
            <input
              type="radio"
              class="radio"
              name="progress"
              value="five"
              id="five"
            />

            <input
              type="radio"
              class="radio"
              name="progress"
              value="twentyfive"
              id="twentyfive"
            />

            <input
              type="radio"
              class="radio"
              name="progress"
              value="fifty"
              id="fifty"
            />

            <input
              type="radio"
              class="radio"
              name="progress"
              value="seventyfive"
              id="seventyfive"
            />

            <input
              type="radio"
              class="radio"
              name="progress"
              value="onehundred"
              id="onehundred"
              checked
            />

            <div class="progress ticket-progress">
              <div class="progress-bar ticket-progress-bar"></div>
            </div>
          </div>
          <div class="cards-paid ticket">
            <div class="cards-paid-box">
              <h3 class="cards-paid-box-title">Datos de facturacion</h3>
              <div class="cards-paid-box-description">
                <div class="cards-paid-box-description-text">
                  <h5 class="bold">Nombre y Apellido</h5>
                  <p>Teresa Styles</p>
                </div>

                <div class="cards-paid-box-description-text">
                  <h5 class="bold">ID</h5>
                  <p>26.479.130</p>
                </div>

                <div class="cards-paid-box-description-text">
                  <h5 class="bold">Direccion</h5>
                  <p>P. Sherman, calle Wabally, 42, Sydney</p>
                </div>

                <div class="cards-paid-box-description-text">
                  <h5 class="bold">Correo</h5>
                  <p>tessa.12@gmail.com</p>
                </div>

                <div class="cards-paid-box-description-text">
                  <h5 class="bold">Telefono</h5>
                  <p>412-332-5991</p>
                </div>
              </div>
            </div>
            <div class="process-box-description ticket-box">
              <div class="process-box-description-name">
                <p>CANT.</p>
                <p>DESCRIPCION</p>
                <p>TOTAL</p>
              </div>
              <div class="process-box-description-text process-paid-description">
                <p class="pad-left-10">3</p>
                <p class="pad-left-10">Pollo Salsa Dulce</p>
                <p>$74,99</p>
              </div>
              <div class="process-box-description-text process-paid-description">
                <p class="pad-left-10">3</p>
                <p class="pad-left-10">Pollo Salsa Dulce</p>
                <p>$74,99</p>
              </div>
              <div class="process-box-description-text process-paid-description">
                <p class="pad-left-10">3</p>
                <p class="pad-left-10">Pollo Salsa Dulce</p>
                <p>$74,99</p>
              </div>
              <div class="process-paid-description-total ticket-total">
                <h3>Total</h3>
                <p>$74,99</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default paidTwo;
