import React, { useEffect, useState } from "react";
import godzilla2 from "../assets/godzilla2.png";
import Navbar from "../Components/Navbar";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";

const signUpInitialData = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Formik = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpData, setSignUpData] = useState(signUpInitialData);

  const signupSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter username"),
    email: Yup.string().email().required("Please enter valid email"),
    password: Yup.string().min(6).required("Please enter password"),
    confirm_password: Yup.string()
      .min(6)
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: signUpData,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);

  return (
    <div>
      <div className="flex items-center h-screen space-x-10 p-2 justify-center">
        <div className="flex flex-col justify-center space-y-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 xsm:space-y-8 xsm:text-sm"
          >
            <div>
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="text-md block px-3 py-2 text-black rounded-lg w-full xsm:w-80 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {touched.username && errors.username ? (
                <p className="text-left text-red-600">{errors.username}</p>
              ) : null}
            </div>
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
            <div className="relative text-black">
              <input
                placeholder="Confirm Password"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
                type={passwordVisible ? "text" : "password"}
                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {touched.confirm_password && errors.confirm_password ? (
                <p className="text-left text-red-600">
                  {errors.confirm_password}
                </p>
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
              value="Sign Up"
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

export default Formik;
