import { getFood } from "../../../actions/foodActions";

const submit = document.getElementById("submit");
export const initMaterial = () => {
  submit.addEventListener("submit", () => {
    console.log("submit");
  });
};
