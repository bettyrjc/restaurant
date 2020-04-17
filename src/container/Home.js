import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import icons from "../components/styles/images/icons/sprite.svg";
import slider from "../components/styles/images/img/slider.png";

import { getFoods, getFood } from "../actions/foodActions";
// import { initMaterial } from "../components/commons/event/addEvent";
class Home extends Component {
  state = {
    query: "",
    // search: {},
  };

  componentDidMount() {
    this.props.getFoods();
    this.props.getFood();
  }

  // renderSearchResults = () => {
  //   // this.setState({search: {
  //   // }})
  // };
  render() {
    const getFoodSearch = (e) => {
      let query = e.target.value;
      this.props.getFood(query);
      console.log(query);
      // e.target.value = "";
    };
    const { foods, search } = this.props;
    return (
      <React.Fragment>
        <Header clicked={getFoodSearch} />
        <div className="container">
          <div className="container-slider">
            <img src={slider} alt="slider" />
          </div>
          {/* <div className="container-food">{search.map((a) => a.strMeal)}</div> */}

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
              <svg className="container-types-icon" id="products_slider_right">
                <use href={`${icons}#icon-chevron-right`} />
              </svg>
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
