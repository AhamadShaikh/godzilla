import axios from "axios";
import {
  ADD_TO_CART_REQUEST,
  GET_CART_DATA_REQUEST,
  QUANTITY_DECREMENT,
  QUANTITY_INCREMENT,
} from "./actionType";

export const getCartDataRequest = () => async (dispatch) => {
  try {
    const res = await axios({
      url: `http://localhost:3000/cart`,
      method: "get",
    });
    if (res?.data) {
      dispatch({ type: GET_CART_DATA_REQUEST, payload: res?.data });
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const quantityIncrementRequest =
  (productId, productData) => async (dispatch) => {
    let newData = { ...productData, quantity: productData.quantity + 1 };
    // console.log(productData.quantity);
    try {
      const res = await axios({
        url: `http://localhost:3000/cart/${productId}`,
        method: "patch",
        data: newData,
      });
      dispatch(getCartDataRequest());
      return res;
      return res;
    } catch (error) {
      console.log(error);
    }
  };

export const quantityDecrementRequest =
  (productId, productData) => async (dispatch) => {
    let newData = { ...productData, quantity: productData.quantity - 1 };
    // console.log(productData.quantity);
    try {
      const res = await axios({
        url: `http://localhost:3000/cart/${productId}`,
        method: "patch",
        data: newData,
      });
      dispatch(getCartDataRequest());
      return res;
    } catch (error) {
      console.log(error);
    }
  };

export const removeCartProductRequest = (productId) => async (dispatch) => {
  try {
    const res = await axios({
      url: `http://localhost:3000/cart/${productId}`,
      method: "delete",
    });
    dispatch(getCartDataRequest())
    return res;
  } catch (error) {
    console.log(error);
  }
};
