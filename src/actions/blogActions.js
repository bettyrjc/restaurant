import axios from "axios";
import {
  GET_PHOTOS,
  GET_PHOTO,
  PHOTO_END_LOADING,
  PHOTO_LOADING,
} from "./types";

export const getBlogs = () => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};
export const getBlog = (id) => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    dispatch({
      type: GET_PHOTO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};

export const removeUserLoading = (dispatch) => {
  dispatch({
    type: PHOTO_END_LOADING,
  });
};
export const UserLoading = (dispatch) => {
  dispatch({
    type: PHOTO_LOADING,
  });
};
