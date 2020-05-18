import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
//
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import FoodCard from "../card/foodCard";
import Favorites from "../card/favorites";
import Comments from "../comments/comments";
import { getFood } from "../../../actions/foodActions";
class Food extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getFood(id);
  }

  render() {
    const { food } = this.props;
    return (
      <React.Fragment>
        <Header />
        <main className="container">
          <FoodCard food={food} />
          <Favorites title="Te provoca" />
          <Comments />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
Food.protoTypes = {
  food: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  food: state.food.food,
});

export default connect(mapStateToProps, { getFood })(Food);
