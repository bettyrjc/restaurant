import React, { Component } from "react";

import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import icons from "../components/styles/images/icons/sprite.svg";
import slider from "../components/styles/images/img/slider.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="container-slider">
            <img src={slider} alt="slider" />
          </div>

          <div className="container-food"></div>

          <div className="container-types">
            <div id="products_slider_left">
              <svg className="container-types-icon">
                <use href={`${icons}#icon-chevron-left`} />
              </svg>
            </div>
            <div className="container-types-main">
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
              <div className="container-types-box"></div>
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
export default Home;
