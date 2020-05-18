import {
  GET_COMMENTS,
  GET_COMMENT,
  COMMENT_LOADING,
  COMMENT_END_LOADING,
} from "../actions/types";

const initialState = {
  comment: {},
  comments: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case COMMENT_END_LOADING:
      return {
        ...state,
        loading: false,
      };
    case GET_COMMENTS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        loading: false,
        comment: action.payload,
      };
    default:
      return state;
  }
}
