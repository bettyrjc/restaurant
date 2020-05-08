const logo = document.getElementById("logo");
const lupa = document.getElementById("search-lupa");
const input = document.getElementById("search-input");
const menu = document.getElementById("menu");

const nav = document.querySelector(".header-navegation");
function ocultar() {
  if (input.classList.contains("active")) {
    input.classList.remove("active");
    input.style.top = "-1000px";
    input.style.width = "0";
    logo.style.display = "block";
  } else {
    input.classList.add("active");
    input.style.top = "0";
    input.style.width = "80%";
    logo.style.display = "none";
    lupa.style.marginLeft = "-2rem";
  }
}
function show() {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    nav.style.top = "-1000px";
    nav.style.width = "0";
    nav.style.margin = "0";
    logo.style.display = "block";
    lupa.style.display = "inline";
  } else {
    nav.classList.add("active");
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.margin = "-20px";
    logo.style.display = "none";

    lupa.style.display = "none";
  }
}
lupa.addEventListener("click", ocultar);
menu.addEventListener("click", show);
// slider
