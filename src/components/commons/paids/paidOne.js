import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/header";
import Footer from "../../layout/footer";

class paidOne extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <div className="process-bar-container">
            <input
              type="radio"
              className="radio"
              name="progress"
              value="five"
              id="five"
            />

            <input
              type="radio"
              className="radio"
              name="progress"
              value="twentyfive"
              id="twentyfive"
            />

            <input
              type="radio"
              className="radio"
              name="progress"
              value="fifty"
              id="fifty"
            />

            <input
              type="radio"
              className="radio"
              name="progress"
              value="seventyfive"
              id="seventyfive"
              checked
            />

            <input
              type="radio"
              className="radio"
              name="progress"
              value="onehundred"
              id="onehundred"
            />

            <div className="progress">
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="grilla">
            <div className="cards-paid">
              <div className="cards-paid-box">
                <h3 className="cards-paid-box-title">Datos de facturacion</h3>
                <div className="cards-paid-box-description">
                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Nombre y Apellido</h5>
                    <p>Teresa Styles</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">ID</h5>
                    <p>26.479.130</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Direccion</h5>
                    <p>P. Sherman, calle Wabally, 42, Sydney</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Correo</h5>
                    <p>tessa.12@gmail.com</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Telefono</h5>
                    <p>412-332-5991</p>
                  </div>
                </div>
              </div>

              <div className="cards-paid-box">
                <h3 className="cards-paid-box-title">Datos de facturacion</h3>
                <div className="cards-paid-box-description">
                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Numero de tarjeta</h5>
                    <p>5843-123-13212-21</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Verificacion</h5>
                    <p>26.479.130</p>
                  </div>

                  <div className="cards-paid-box-description-text">
                    <h5 className="bold">Banco</h5>
                    <p>PWabally, Sydney</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="process process-paid">
              <div className="process-box">
                <div className="process-box-name">
                  <h3>Pagar</h3>
                </div>
                <div className="process-box-description">
                  <div className="process-box-description-name">
                    <p>CANT.</p>
                    <p>DESCRIPCION</p>
                    <p>TOTAL</p>
                  </div>
                  <div className="process-box-description-text process-paid-description">
                    <p className="pad-left-10">3</p>
                    <p className="pad-left-10">Pollo Salsa Dulce</p>
                    <p>$74,99</p>
                  </div>
                  <div className="process-box-description-text process-paid-description">
                    <p className="pad-left-10">3</p>
                    <p className="pad-left-10">Pollo Salsa Dulce</p>
                    <p>$74,99</p>
                  </div>
                  <div className="process-box-description-text process-paid-description">
                    <p className="pad-left-10">3</p>
                    <p className="pad-left-10">Pollo Salsa Dulce</p>
                    <p>$74,99</p>
                  </div>
                  <div className="process-paid-description-total">
                    <h3>PAGAR</h3>
                    <p>$74,99</p>
                  </div>
                </div>
              </div>
              <Link to="/carrito/paso-dos">
                <button className="process-btn fill">Aceptar</button>
              </Link>
              <p className="process-paid-delivery">
                <input type="checkbox" name="Delivery" id="delivery" /> Delivery
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default paidOne;
