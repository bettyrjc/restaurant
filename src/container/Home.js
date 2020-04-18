import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Sidenav from "../components/layout/nav";
import icons from "../components/styles/images/icons/sprite.svg";
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
            <div className="container-slider">
              <img src={slider} alt="slider" />
            </div>
            <div className="container-food">
              {search === null || search === undefined ? (
                <div>Busca algo</div>
              ) : (
                search.map((fod) => <div key={fod.idMeal}>{fod.strMeal}</div>)
              )}
            </div>

            <div className="container-types">
              <div id="products_slider_left">
                <svg className="container-types-icon">
                  <use href={`${icons}#icon-chevron-left`} />
                </svg>
              </div>
              <div className="container-types-main">
                {foods.map((food) => (
                  <div className="container-types-box" key={food.idCategory}>
                    <h1>{food.strCategory}</h1>
                    <p>{food.strCategoryDescription}</p>
                  </div>
                ))}
              </div>
              <div>
                <svg
                  className="container-types-icon"
                  id="products_slider_right"
                >
                  <use href={`${icons}#icon-chevron-right`} />
                </svg>
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
