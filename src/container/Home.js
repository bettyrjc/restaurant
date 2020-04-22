import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Sidenav from "../components/layout/nav";
import slider from "../components/styles/images/img/slider.png";

import { getFoods, getFood } from "../actions/foodActions";

class Home extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    this.props.getFoods();
  }

  getFoodInput = ({ target: { value } }) => {
    this.setState(() => value);
    if (value !== null) {
      this.props.getFood(value);
    }
  };
  render() {
    const { foods, search } = this.props;
    return (
      <React.Fragment>
        <Header clicked={this.getFoodInput} />
        <div className="container">
          <Sidenav />
          <div>
            <div className="container-food">
              {search === null || search === undefined ? (
                <div>Busca algo</div>
              ) : (
                search.map((fod) => <div key={fod.idMeal}>{fod.strMeal}</div>)
              )}
            </div>
            <div className="container-slider">
              <img src={slider} alt="slider" />
            </div>

            <div className="container-types">
              <h1 className="container-types-title"> Categorias</h1>
              <div className="container-types-main">
                {foods.map((food) => (
                  <div className="container-types-box" key={food.idCategory}>
                    <h1>{food.strCategory}</h1>
                    <p>{food.strCategoryDescription}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* trabajadores del mes */}
            <div className="workers">
              <h1>Trabajadores del mes</h1>
              <p>
                Restauranta, tiene mas de 100 empleados y en el mes de Abril
                estos son los 10 destacados
              </p>
              <div className="workers-container">
                <div className="workers-box">
                  <h1 className="workers-box-name">Diana Venezuela</h1>
                  <p className="workers-box-puesto">Lavaplatos</p>
                  <p className="workers-box-puesto">
                    Diana, ha sido nuestra trabajadora del mes por su dedicacion
                    y amor al trabajo
                  </p>
                </div>
                {/*  */}
                <div className="workers-box">
                  <h1 className="workers-box-name">Diana Venezuela</h1>
                  <p className="workers-box-puesto">Lavaplatos</p>
                  <p className="workers-box-puesto">
                    Diana, ha sido nuestra trabajadora del mes por su dedicacion
                    y amor al trabajo
                  </p>
                </div>
              </div>
            </div>
            <div className="favFood">
              <h1 className="favFood-title">Comida destacada de este mes</h1>
              <p>
                Restauranta, hace una encuensta a sus clientes de cual ha sido
                su comida favorita del mes
              </p>
              <p>
                Este mes ha ganado el <strong>Pollo Salsa negra</strong>
              </p>
              <div className="favFood-container">
                <img
                  className="favFood-img"
                  src="https://3.bp.blogspot.com/-3SrZPvObwkg/T81hy236_MI/AAAAAAAAAyo/lKxAQtadUvs/s1600/2012-06-04+16.09.18.jpg"
                  alt="pollo"
                />
                <div className="favFood-box">
                  <p className="favFood-box-name">Frijoles</p>
                  <p className="favFood-box-category">
                    <strong>Categoria:</strong>
                    Vegana
                  </p>
                  <p className="workers-box-puesto">
                    Nuestros frijoles son los mejores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
Home.protoTypes = {
  search: PropTypes.array,
  foods: PropTypes.array.isRequired,
  getFoods: PropTypes.func.isRequired,
  getFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.food.foods,
  search: state.food.search,
});

export default connect(mapStateToProps, { getFoods, getFood })(Home);
