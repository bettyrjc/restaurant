import axios from "axios";
import { GET_FOODS, GET_SEARCH_FOOD, GET_FOOD } from "./types";

export const getFoods = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    dispatch({
      type: GET_FOODS,
      payload: res.data.categories,
    });
    console.log(res.data);
  } catch {
    console.log("error no entiendo");
  }
};

export const searchFood = (query) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    dispatch({
      type: GET_SEARCH_FOOD,
      payload: res.data.meals,
    });
    console.log("hola", res.data.meals);
  } catch {
    console.log("error en busqueda");
  }
};
export const getFood = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    dispatch({
      type: GET_FOOD,
      payload: res.data.meals[0],
    });
    console.log("food", res.data.meals[0]);
  } catch {
    console.log("error no entiendo");
  }
};
