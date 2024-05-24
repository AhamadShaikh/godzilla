import React from "react";
import Landing from "../Pages/Landing";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PrivateRoute from "../Components/PrivateRoute";
import Products from "../Pages/Products";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            // <PrivateRoute>
              <Home />
            // {/* </PrivateRoute> */}
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
