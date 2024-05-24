import React, { useEffect, useState } from "react";
import godzilla2 from "../assets/godzilla2.png";
import Navbar from "../Components/Navbar";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signupRequest } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const signUpInitialData = {
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpData, setSignUpData] = useState(signUpInitialData);
  const [formsError, setFormsError] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
    setFormsError(formValidation({ ...signUpData, [name]: value }));
  };

  const formValidation = (data) => {
    let error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!data.username) {
      error.username = "Username is required";
    }
    if (!data.email) {
      error.email = "Email is required";
    } else if (!regex.test(data.email)) {
      error.email = "Invalid email address";
    }
    if (!data.password) {
      error.password = "Password is required";
    } else if (data.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (data.password.length > 8) {
      error.password = "Password must not be more than 8 characters";
    }
    return error;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmit(true);
    const errors = formValidation(signUpData);
    setFormsError(errors);

    if (Object.keys(errors).length === 0) {
      try {
        dispatch(signupRequest(signUpData)).then((res) => {
          naviagte("/login");
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formsError).length === 0 && isFormSubmit) {
      console.log(signUpData);
    }
  }, [formsError]);

  return (
    <div>
      <Navbar />
      <div className="flex items-center h-screen space-x-10 p-2 justify-center">
        <div className="flex flex-col justify-center space-y-10">
          <span className="font-bold text-2xl">Sign Up</span>
          <div className="flex flex-col space-y-4">
            <GoogleLogin
              className="bg-blue-100 text-black py-2 rounded-md xsm:text-sm flex justify-center"
              onSuccess={handleSignUpSubmit}
              onError={(handleLoginError) => {
                console.log(handleLoginError);
              }}
            />
            <button className="bg-blue-100 text-black py-2 rounded-md xsm:text-sm flex justify-center ">
              <FaGithub className="mr-2" />
              Sign Up with GitHub
            </button>
          </div>
          <div className="xsm:text-sm">or sign up with email</div>
          <form
            onSubmit={handleSignUpSubmit}
            className="flex flex-col space-y-4 xsm:space-y-2 xsm:text-sm"
          >
            <div className="py-2">
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
                className="text-md block px-3 py-2 text-black rounded-lg w-full xsm:w-80 bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {formsError.username && (
                <p className="text-red-600 text-left">{formsError.username}</p>
              )}
            </div>
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              className="text-md block px-3 py-2 rounded-lg w-full md:w-80 text-black bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
            />
            {formsError.email && (
              <p className="text-red-600 text-left">{formsError.email}</p>
            )}

            <div className="relative text-black">
              <input
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                type={passwordVisible ? "text" : "password"}
                className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
              />
              {formsError.password && (
                <p className="text-red-600">{formsError.password}</p>
              )}
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

export default SignUp;
