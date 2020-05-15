import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
//
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import FoodCard from "../card/foodCard";
import Comments from "../comments/comments";
import { getFood } from "../../actions/foodActions";
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

          <div className="similares"></div>
          <div className="favorites">
            <h1 className="favorites-title">Te provoca</h1>
            <div className="favorites-container">
              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's
                </p>
              </div>

              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text
                </p>
              </div>

              <div className="favorites-box">
                <div className="favorites-box-img">
                  <img
                    src="https://menorquina.com/media/cache/thumb_500x350/uploads/mini_plateful/c33e97373915735387931369e1d175c9d12953e1.jpeg"
                    alt="comida uno"
                  />
                </div>
                <h3 className="favorites-box-title">Comida</h3>
                <p className="favorites-box-text">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since
                </p>
              </div>
            </div>
          </div>
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
