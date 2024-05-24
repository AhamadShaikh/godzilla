import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import godzilla2 from "../assets/godzilla2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginRequest } from "../Redux/Auth/action";

const loginInitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const auth = useSelector((store) => store.authReducer.auth);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState(loginInitialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter valid email"),
    password: Yup.string().min(6).required("Please enter password"),
  });

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: loginData,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        // console.log(values);
        // dispatch(loginRequest(values));
      },
    });
  console.log(auth);
  if (auth) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex items-center h-screen space-x-10 p-2 justify-center">
        <div className="flex flex-col justify-center space-y-10">
          <div className="text-4xl font-bold mb-4">Log In</div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 xsm:space-y-8 xsm:text-sm"
          >
            <div>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="text-md block px-3 py-2 rounded-lg w-full md:w-80 text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {touched.email && errors.email ? (
                <p className="text-left text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <div className="relative text-black">
              <input
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordVisible ? "text" : "password"}
                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {touched.password && errors.password ? (
                <p className="text-left text-red-600">{errors.password}</p>
              ) : null}
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <input
              type="submit"
              value="Log In"
              className="bg-[#466DF7] hover:cursor-pointer hover:bg-blue-400 text-white px-16 py-2 rounded-md"
            />
          </form>
        </div>
        <div className="h-[450px] mt-16 xsm:hidden lg:block md:block">
          <img src={godzilla2} alt="godzilla" className="h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
