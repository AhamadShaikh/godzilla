import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiLion } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../index.css";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { BsCart3 } from "react-icons/bs";

const Navbar = ({totalCartItems}) => {
  const auth = useSelector((store) => store.authReducer.auth);
  const cartData = useSelector((store) => store.cartReducer.cart);
  // const [totalCartItems, setTotalCartItems] = useState(cartData.length || 0);

  const [hamburger, setHamburger] = useState(false);
  return (
    <div class="bg-black h-14 flex items-center justify-between fixed inset-0 z-10 right-2 ">
      <div class="flex justify-between inset-0 w-full">
        <div class="flex space-x-4 xsm:space-x-4">
          <div
            class="relative top-2 ml-2 md:hidden lg:hidden xl:hidden"
            onClick={() => setHamburger(!hamburger)}
          >
            <GiHamburgerMenu />
          </div>
          <div class="relative xsm:left-1 top-1 text-lg font-serif font-bold lg:top-0 flex md:top-0 xsm:mr-2">
            <GiLion class="relative top-1 mx-1 text-red-600" />
            GodZilla
          </div>
        </div>
        <ul class="flex lg:space-x-14 md:space-x-10 xsm:space-x-2 sm:space-x-4 xsm:hidden md:inline md:flex lg:flex">
          <Link to="/home">
            <li class="hover:cursor-pointer">Home</li>
          </Link>
          <li>About</li>
          <li>Products</li>
          <li>Support</li>
          <ul class="flex">
            <li>Pages</li>
            <li>
              <select
                name="Pages"
                id=""
                class="bg-[#090F34] text-white"
              ></select>
            </li>
          </ul>
        </ul>
        <div>
          {auth ? (
            <Link to="/cart">
              <div class="flex space-x-2">
                <button class="bg-[#466DF7] text-white px-2 py-1 rounded-md xsm:py-1 hover:cursor-pointer">
                  <BsCart3 />
                  <p class="absolute top-[6px] right-[80px] text-sm font-bold">
                    {totalCartItems}
                  </p>
                </button>
                <button class="bg-[#466DF7] text-white px-2 py-1 rounded-md xsm:py-1 hover:cursor-pointer">
                  Logout
                </button>
              </div>
            </Link>
          ) : (
            <div class="flex space-x-4">
              <Link to="/login">
                <button class="bg-[#466DF7] text-white px-2 py-1 rounded-md xsm:py-1 hover:cursor-pointer">
                  Sign In
                </button>
              </Link>
              <Link to="/signup">
                <button class="get bg-[#466DF7] text-white px-2 py-1 rounded-md">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {hamburger && (
        <div className="fixed inset-0 bg-neutral-900 bg-opacity-50 z-50 text-white flex justify-start">
          <ul className="fixed left-0 top-0 h-full w-[30%] bg-[#202B72]  p-4 z-50 ">
            <button onClick={() => setHamburger(!hamburger)}>&times;</button>
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Support</li>
            <li className="flex items-center justify-center">
              Pages
              <select
                name="Pages"
                id=""
                className="bg-white text-black ml-2"
              ></select>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
