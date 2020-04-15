// class SliderProducts {
//   config = {
//     id_slider: "products_slider",
//     id_left_button: "",
//     id_right_button: "",
//   };
//   scrollPixels = 600;
//   scrollContainer = null;

//   constructor(
//     config = {
//       id_slider: "products_slider",
//       id_left_button: "products_slider_left",
//       id_right_button: "products_slider_right",
//     }
//   ) {
//     Object.keys(config).map((key) => (this.config[key] = config[key]));
//     const sliderContainer = document.getElementById(config.id_slider);
//     const leftButton = document.getElementById(config.id_left_button);
//     const rightButton = document.getElementById(config.id_right_button);
//     if (!sliderContainer || !leftButton || !rightButton) return;

//     leftButton.onclick = this.scrollLeft;
//     rightButton.onclick = this.scrollRight;
//     this.scrollContainer = sliderContainer;
//   }

//   scrollLeft = () => {
//     if (!this.scrollContainer) return;
//     this.scrollContainer.scrollLeft -= this.scrollPixels;
//   };

//   scrollRight = () => {
//     if (!this.scrollContainer) return;
//     this.scrollContainer.scrollLeft += this.scrollPixels;
//   };
// }
