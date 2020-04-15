import {
  FOOD_LOADING,
  FOOD_END_LOADING,
  FOOD_RESET_DATA,
  GET_FOODS,
  GET_FOOD,
} from "../actions/types";

const initialState = {
  loading: false,
  foods: [],
  food: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FOOD_LOADING:
      return {
        ...state,
        loading: true,
      };

    case FOOD_END_LOADING:
      return {
        ...state,
        loading: false,
      };

    case GET_FOODS:
      return {
        ...state,
        loading: false,
        foods: action.payload,
      };

    case GET_FOOD:
      return {
        ...state,
        loading: false,
        food: action.payload,
      };

    case FOOD_RESET_DATA:
      return {
        ...state,
        loading: false,
        food: {},
        foods: [],
      };
    default:
      return state;
  }
}
