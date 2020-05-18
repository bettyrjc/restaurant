import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Slider from "../components/layout/Slider";
import Worker from "../components/commons/workers/Workers";
import Favoritos from "../components/commons/card/favorites";
import { getFoods } from "../actions/foodActions";

import { init } from "../components/utils/utils";
class Home extends Component {
  componentDidMount() {
    this.props.getFoods();

    init();
  }

  componentWillUnmount() {
    init();
  }

  render() {
    const { foods } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <Slider />
          <div>
            <Favoritos title="Favoritos" />
            <Worker />
            <div className="categories">
              <div className="yellow"></div>
              <div className="red"></div>
              <div className="blue"></div>
              <h1 className="categories-title">Categorias</h1>
              <div className="categories-grilla">
                {foods.map((food) => (
                  <div className="categories-box" key={food.idCategory}>
                    <div className="categories-box-img">
                      <img src={food.strCategoryThumb} alt={food.strCategory} />
                    </div>
                    <div className="categories-box-text">
                      <h2>{food.strCategory}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="delivery">
              <button className="delivery-btn">Ordena tu comida</button>
              <p className="delivery-text">30 minutos y la tienes en tu casa</p>
            </div>
            {/* trabajadores del mes */}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
Home.protoTypes = {
  foods: PropTypes.array.isRequired,
  getFoods: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.food.foods,
  food: state.food.foods,
});

export default connect(mapStateToProps, { getFoods })(Home);
