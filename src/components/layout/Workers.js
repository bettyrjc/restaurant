import React, { Component } from "react";
let indice = 1;
class Categories extends Component {
  componentDidMount() {
    this.showCarousel(indice);
  }
  showCarousel(n) {
    let carousel = document.getElementsByClassName("workers-container");
    let circles = document.getElementsByClassName("workers-circle");

    let i;
    if (n > carousel.length) {
      indice = 1;
    }
    if (n < 1) {
      indice = carousel.length;
    }
    for (i = 0; i < carousel.length; i++) {
      carousel[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace("active", "");
    }
    carousel[indice - 1].style.display = "flex";
    circles[indice - 1].className += " active";
  }
  position(n) {
    this.showCarousel((indice = n));
  }
  counter = setInterval(() => {
    this.showCarousel((indice += 1));
  }, 5000);
  render() {
    return (
      <div className="workers">
        <h1 className="workers-title">Trabajadores del mes</h1>

        <div className="workers-boxMain">
          <div className="workers-container">
            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Chef</h3>
              <h3 className="workers-box-text">Betty Maddox</h3>
            </div>

            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Ayudante de cocina</h3>
              <h3 className="workers-box-text">Tyler Maddox</h3>
            </div>
            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Cocinero</h3>
              <h3 className="workers-box-text">Travis Maddox</h3>
            </div>
          </div>
          <div className="workers-container">
            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Chef</h3>
              <h3 className="workers-box-text">Betty Maddox</h3>
            </div>

            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Ayudante de cocina</h3>
              <h3 className="workers-box-text">Tyler Maddox</h3>
            </div>
            <div className="workers-box">
              <div className="workers-box-img">
                <img
                  src="https://www.experienceaustralia.net/wp-content/uploads/2014/06/Cocineros-en-Australia.jpg"
                  alt="favorito"
                />
              </div>
              <h3 className="workers-box-title">Cocinero</h3>
              <h3 className="workers-box-text">bett Maddox</h3>
            </div>
          </div>
        </div>
        <div className="slider-box">
          <div
            className="workers-circle active"
            onClick={() => this.position(1)}
          ></div>
          <div
            className="workers-circle "
            onClick={() => this.position(2)}
          ></div>
        </div>
      </div>
    );
  }
}
export default Categories;
