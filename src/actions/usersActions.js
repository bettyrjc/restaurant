import axios from "axios";
import { GET_USER, GET_USERS, USER_END_LOADING, USER_LOADING } from "./types";

export const getUsers = () => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};
export const getUser = (id) => async (dispatch) => {
  UserLoading(dispatch);
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/USERs/${id}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    removeUserLoading(dispatch);
  }
};

export const removeUserLoading = (dispatch) => {
  dispatch({
    type: USER_END_LOADING,
  });
};
export const UserLoading = (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
};
