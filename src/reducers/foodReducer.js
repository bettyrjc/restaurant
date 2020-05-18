import {
  GET_FOOD,
  GET_FOODS,
  GET_SEARCH_FOOD,
  FOOD_END_LOADING,
  FOOD_LOADING,
} from "../actions/types";

const initialState = {
  foods: [],
  search: [],
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
    case GET_SEARCH_FOOD:
      return {
        ...state,
        loading: false,
        search: action.payload,
        ...state.comments,
      };
    default:
      return state;
  }
}
