import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ chidren }) => {
  const auth = useSelector((store) => store.authReducer.auth);

  if (auth === false) {
    return <Navigate to="/login" />;
  }

  return chidren;
};

export default PrivateRoute;
