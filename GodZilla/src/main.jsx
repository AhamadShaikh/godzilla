import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContextProvider.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <GoogleOAuthProvider clientId="1016156225402-k2fk23pq0dvoanods07stoflin1jnvdj.apps.googleusercontent.com"> */}
        {/* <AuthContextProvider> */}
          <App />
        {/* </AuthContextProvider> */}
      {/* </GoogleOAuthProvider> */}
    </Provider>
  </BrowserRouter>
);
