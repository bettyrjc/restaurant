let slides = document.getElementsByClassName("slider-img");
let barras = document.getElementsByClassName("slider-box-circle");

let indice = 1;
// llamando a muestra slide
showSlide(indice);

// indice es igual a uno plus uno o menos uno, dependiendo del boton que se le,
// en el html es -1 y + 1
function avanzaSlide(n) {
  showSlide((indice += n));
}
// barra
function position(n) {
  showSlide((indice = n));
}

setInterval(function tiempo() {
  showSlide((indice += 1));
}, 10000);
function showSlide(n) {
  let i;
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  // poniendo todas ocultas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // le estamos quitando todas las clases
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace("active", "");
  }
  // aqui se esta inciado todo desde cero
  slides[indice - 1].style.display = "block";
  barras[indice - 1].className += " active";
}
