import axios from "axios";
import {
  GET_COMMENT,
  GET_COMMENTS,
  COMMENT_END_LOADING,
  COMMENT_LOADING,
} from "./types";

export const getComments = () => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};
export const getComment = (id) => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );

    dispatch({
      type: GET_COMMENT,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};

export const removeUserLoading = (dispatch) => {
  dispatch({
    type: COMMENT_END_LOADING,
  });
};
export const UserLoading = (dispatch) => {
  dispatch({
    type: COMMENT_LOADING,
  });
};
