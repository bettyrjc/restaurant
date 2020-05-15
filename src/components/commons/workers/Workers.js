import React, { Component } from "react";

let indice = 1;

class Categories extends Component {
  state = {
    groupOne: [
      {
        id: 1,
        name: "Travis Maddox",
        puesto: "Chef",
        img:
          "https://growproexperience.com/wp-content/uploads/2018/06/Chef-en-Australia-1280x640.jpg",
      },
      {
        id: 2,
        name: "Chace Crawford",
        puesto: "Lavaplatos",
        img:
          "https://i.pinimg.com/originals/10/0d/92/100d921d13a01b9aeabfb25fe1545ce8.jpg",
      },
      {
        id: 3,
        name: "Perrie Edwards",
        puesto: "Mesera",
        img:
          "https://i.pinimg.com/originals/2b/6a/39/2b6a39b1e41d3a28f534db1d8dd80c95.jpg",
      },
    ],
    groupTwo: [
      {
        id: 1,
        name: "Luke Hemmings",
        puesto: "Cocinero",
        img:
          "https://lh3.googleusercontent.com/proxy/1qyzddRSLDjE6TJmVOCIFUKaa58s0cKuFYmVpSXisTcVHt7HnCdUvnEfpzNuVwKq8rw4bwvah1RQAq55C3wdkN2hHP-vApN88Av37qz-AFmxeqZckHy-GwpL7Ers60P3bidfx-mnQbCkvL6nZ4PWt-9d",
      },
      {
        id: 2,
        name: "Dua Lipa",
        puesto: "Mesera",
        img:
          "https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2020/03/dua_lipa.jpg?itok=x3spmeJh",
      },
      {
        id: 3,
        name: "Harry Styles",
        puesto: "Entretenimiento",
        img:
          "https://www.republica.com/wp-content/uploads/2019/12/Harry-Styles-1280x720.jpg",
      },
    ],
  };
  componentDidMount() {
    this.showCarousel(indice);
  }
  componentWillUnmount() {
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
  counter() {
    setInterval(() => {
      this.showSlide((indice += 1));
    }, 2000);
  }

  render() {
    const { groupOne, groupTwo } = this.state;

    return (
      <div className="workers">
        <h1 className="workers-title">Trabajadores del mes</h1>

        <div className="workers-boxMain">
          <div className="workers-container">
            {groupOne.map((f) => (
              <div className="workers-box" key={f.id}>
                <div className="workers-box-img">
                  <img src={f.img} alt={f.name} />
                </div>
                <h3 className="workers-box-title">{f.puesto}</h3>
                <h3 className="workers-box-text">{f.name}</h3>
              </div>
            ))}
          </div>
          <div className="workers-container">
            {groupTwo.map((f) => (
              <div className="workers-box" key={f.id}>
                <div className="workers-box-img">
                  <img src={f.img} alt={f.name} />
                </div>
                <h3 className="workers-box-title">{f.puesto}</h3>
                <h3 className="workers-box-text">{f.name}</h3>
              </div>
            ))}
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
