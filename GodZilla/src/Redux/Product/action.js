import axios from "axios";
import {
  ADD_TO_CART_REQUEST,
  GET_CART_DATA_REQUEST,
  GET_PRODUCTS_SUCCESSFUL,
  GET_SINGLE_PRODUCT_REQUEST,
  HOME_PRODUCTS_REQUEST,
} from "./actionType";

export const getHomeProducts = () => async (dispatch) => {
  try {
    const res = await axios({
      url: `http://localhost:3000/products?_limit=6`,
      method: "get",
    });
    if (res?.data) {
      dispatch({ type: HOME_PRODUCTS_REQUEST, payload: res?.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = (page,perPage,obj) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3000/products?_page=${page}&_per_page=${perPage}`, obj);
    // console.log(res.data.pages);
    dispatch({ type: GET_PRODUCTS_SUCCESSFUL, payload: res?.data.data });
    return res
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_PRODUCTS_FAILED, payload: error.message });
  }
};

export const getSingleProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios({
      url: `http://localhost:3000/products/${productId}`,
      method: "get",
    });
    console.log(res);
    if (res?.data) {
      dispatch({ type: GET_SINGLE_PRODUCT_REQUEST, payload: res?.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToCartRequest = (data) => async (dispatch) => {
  console.log(data);
  try {
    const res = await axios({
      url: `http://localhost:3000/cart`,
      method: "post",
      data: { ...data, quantity: 1 },
    });
    if (res?.data) {
      dispatch({ type: ADD_TO_CART_REQUEST, payload: res?.data });
    }
    return res
  } catch (error) {
    console.log(error);
  }
};
