import axios from "axios";
import { GET_FOODS, GET_SEARCH_FOOD } from "./types";

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

export const getFood = (query) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    dispatch({
      type: GET_SEARCH_FOOD,
      payload: res.data.meals,
    });
    console.log(res.data.meals);
  } catch {
    console.log("error en busqueda");
  }
};
