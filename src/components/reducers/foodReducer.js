import { GET_FOODS, GET_SEARCH_FOOD } from "../actions/types";

const initialState = {
  foods: [],
  search: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOODS:
      return {
        ...state,
        loading: false,
        foods: action.payload,
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
