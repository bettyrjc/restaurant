import React, { Component } from "react";

import restaurant from "../styles/img/one.jpeg";
import comida from "../styles/img/two.jpg";
import pasta from "../styles/img/three.jpeg";
import icons from "../styles/img/sprite.svg";
import { showSlide } from "../utils/utils";
let indice = 1;
class Slider extends Component {
  componentDidMount() {
    this.showSlide(indice);
  }

  showSlide(n) {
    let slides = document.getElementsByClassName("slider-img");
    let barras = document.getElementsByClassName("slider-box-circle");
    let i;
    if (n > slides.length) {
      indice = 1;
    }
    if (n < 1) {
      indice = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < barras.length; i++) {
      barras[i].className = barras[i].className.replace("active", "");
    }
    slides[indice - 1].style.display = "block";
    barras[indice - 1].className += " active";
  }

  avanzaSlide(n) {
    this.showSlide((indice += n));
  }
  position(n) {
    this.showSlide((indice = n));
  }
  counter = setInterval(() => {
    this.showSlide((indice += 1));
  }, 2000);

  render() {
    return (
      <div className="slider">
        <div className="slider-main">
          <div id="left" className="left" onClick={() => this.avanzaSlide(-1)}>
            <svg className="workers-boxMain-icon">
              <use href={`${icons}#icon-chevron-small-left`}></use>
            </svg>
          </div>
          <div id="slider" className="slider-container">
            <img src={restaurant} alt="emplatado" className="slider-img fade" />
            <img src={comida} alt="emplatado" className="slider-img fade" />
            <img src={pasta} alt="emplatado" className="slider-img fade" />
          </div>
          <div id="right" className="right" onClick={() => this.avanzaSlide(1)}>
            <svg className="workers-boxMain-icon">
              <use href={`${icons}#icon-chevron-small-right`}></use>
            </svg>
          </div>
        </div>
        <div className="slider-box">
          <div
            className="slider-box-circle active"
            onClick={() => this.position(1)}
          ></div>
          <div
            className="slider-box-circle"
            onClick={() => this.position(2)}
          ></div>
          <div
            className="slider-box-circle"
            onClick={() => this.position(3)}
          ></div>
        </div>
      </div>
    );
  }
}
export default Slider;
