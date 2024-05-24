import axios from "axios";
import { LOGIN_SUCCESSFULL } from "./actionType";

export const loginAction = (data) => {
  return { type: LOGIN_SUCCESSFULL, payload: data };
};

export const signupRequest = (signupData) => async (dispatch) => {
  try {
    return await axios({
      url: `http://localhost:3000/users`,
      method: "post",
      data: signupData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginRequest = (loginData) => async (dispatch) => {
  try {
    dispatch(loginAction(loginData));
  } catch (error) {
    console.log(error);
  }
};
