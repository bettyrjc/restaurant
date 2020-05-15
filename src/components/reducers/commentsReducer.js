import {
  GET_USERS,
  GET_USER,
  USER_LOADING,
  USER_END_LOADING,
} from "../actions/types";

const initialState = {
  comment: {},
  comments: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_USERS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    default:
      return state;
  }
}
