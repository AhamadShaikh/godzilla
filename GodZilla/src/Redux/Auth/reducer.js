import { LOGIN_SUCCESSFULL, LOGOUT_SUCCESSFULL } from "./actionType";

const initialState = {
  auth: true,
  token: "",
};

const checkUserAuth = (userData) => {
    userData?.for
};

export const reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case LOGIN_SUCCESSFULL: {
      return {
        ...state,
        auth: checkUserAuth(),
        token: payload ? payload : "",
      };
    }
    case LOGOUT_SUCCESSFULL: {
      return {
        ...state,
        auth: false,
        token: payload ? payload : "",
      };
    }
    default: {
      return state;
    }
  }
};
