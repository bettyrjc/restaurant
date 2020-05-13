export const init = () => {
  let slides = document.getElementsByClassName("slider-img");
  let barras = document.getElementsByClassName("slider-box-circle");
  let carousel = document.getElementsByClassName("workers-container");
  let circles = document.getElementsByClassName("workers-circle");

  let indice = 1;
  // llamando a muestra slide
  showSlide(indice);
  showCarousel(indice);

  function avanzaSlide(n) {
    showSlide((indice += n));
  }
  // barra
  function position(n) {
    showSlide((indice = n));
    showCarousel((indice = n));
  }

  setInterval(function tiempo() {
    showSlide((indice += 1));
    // showCarousel((indice += 1));
  }, 500);

  function showSlide(n) {
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
  function showCarousel(n) {
    console.log(carousel.length);
    console.log(circles.length);
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
};
