import {
  ADD_TO_CART_REQUEST,
  ERROR_REQUEST,
  GET_CART_DATA_REQUEST,
  LOADING_REQUEST,
  QUANTITY_DECREMENT,
  QUANTITY_INCREMENT,
} from "./actionType";

const initialState = {
  cart: [],
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

    case ADD_TO_CART_REQUEST: {
      return {
        ...state,
        cart: [...state.cart, payload],
        isLoading: false,
        isError: false,
      };
    }

    case GET_CART_DATA_REQUEST: {
      return {
        ...state,
        cart: payload,
        isLoading: false,
        isError: false,
      };
    }

    // case QUANTITY_INCREMENT: {
    //   return {
    //     ...state,
    //     cart: [...state.cart, payload],
    //     isLoading: false,
    //     isError: false,
    //   };
    // }

    // case QUANTITY_DECREMENT: {
    //   return {
    //     ...state,
    //     cart: [...state.cart, payload],
    //     isLoading: false,
    //     isError: false,
    //   };
    // }

    default:
      return { ...state };
  }
};
