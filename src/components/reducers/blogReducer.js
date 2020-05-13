import {
  GET_PHOTO,
  GET_PHOTOS,
  PHOTO_LOADING,
  PHOTO_END_LOADING,
} from "../actions/types";

const initialState = {
  blog: {},
  blogs: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case PHOTO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PHOTO_END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_PHOTO:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case GET_PHOTOS:
      return {
        ...state,
        loading: false,
        blog: action.payload,
      };
    default:
      return state;
  }
}
