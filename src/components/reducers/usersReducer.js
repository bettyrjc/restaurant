import {
  GET_USER,
  GET_USERS,
  USER_LOADING,
  USER_END_LOADING,
} from "../actions/types";

const initialState = {
  user: {},
  users: [],
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
    case GET_USER:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}
