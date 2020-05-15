import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Slider from "../components/layout/Slider";
import Worker from "../components/layout/Workers";
import { getFoods } from "../components/actions/foodActions";
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
            <div className="favorites">
              <h1 className="favorites-title">Favoritos</h1>
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
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's
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
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text
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
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since
                  </p>
                </div>
              </div>
            </div>
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
