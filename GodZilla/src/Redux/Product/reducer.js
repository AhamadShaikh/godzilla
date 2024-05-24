import {
  ADD_TO_CART_REQUEST,
  ERROR_REQUEST,
  GET_PRODUCTS_SUCCESSFUL,
  GET_SINGLE_PRODUCT_REQUEST,
  HOME_PRODUCTS_REQUEST,
  LOADING_REQUEST,
} from "./actionType";

const initialState = {
  home_products: [],
  products: [],
  cart: [],
  single_product: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_REQUEST: {
      return {
        ...state,
        home_products: [],
        products: [],
        isLoading: true,
        isError: false,
      };
    }
    case ERROR_REQUEST: {
      return {
        ...state,
        home_products: [],
        products: [],
        isLoading: false,
        isError: true,
      };
    }

    case GET_SINGLE_PRODUCT_REQUEST: {
      return {
        ...state,
        single_product: payload,
        isLoading: false,
        isError: true,
      };
    }

    case HOME_PRODUCTS_REQUEST: {
      return {
        ...state,
        home_products: payload,
        isLoading: false,
        isError: false,
      };
    }

    case GET_PRODUCTS_SUCCESSFUL: {
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    }

    case ADD_TO_CART_REQUEST: {
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
        isLoading: false,
        isError: false,
      };
    }
    default:
      return { ...state };
  }
};
