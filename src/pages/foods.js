import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";

import { searchFood } from "../components/actions/foodActions";

class Foods extends Component {
  state = {
    value: "",
  };
  getFoodInput = ({ target: { value } }) => {
    this.setState(() => value);
    if (value !== null) {
      this.props.searchFood(value);
    }
  };
  render() {
    const { search } = this.props;
    return (
      <React.Fragment>
        <Header clicked={this.getFoodInput} />
        <div className="container categories">
          <h1 className="categories-title">Busca tu comida favorita</h1>

          <div className="categories-grilla">
            {search === null || search === undefined ? (
              <div>Busca algo</div>
            ) : (
              search.map((fod) => (
                <div className="categories-box" key={fod.idMeal}>
                  <div className="categories-box-img">
                    <img src={fod.strMealThumb} alt={fod.strMeal} />
                  </div>
                  <div className="categories-box-text">
                    <Link to={`comidas/${fod.idMeal}`}>
                      <h2>{fod.strMeal}</h2>
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
Foods.protoTypes = {
  search: PropTypes.array,
  searchFood: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  foods: state.food.foods,
  search: state.food.search,
  food: state.food.foods,
});

export default connect(mapStateToProps, { searchFood })(Foods);
