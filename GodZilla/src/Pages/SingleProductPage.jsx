import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest, getSingleProduct } from "../Redux/Product/action";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SingleProductPage = () => {
  const single_product = useSelector(
    (store) => store.productReducer.single_product
  );

  const cartData = useSelector((store) => store.cartReducer.cart);

  console.log(cartData);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    let flag = false;
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].id === id) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      dispatch(addToCartRequest(single_product)).then(()=>{
        navigate("/cart")
      })
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div class="flex justify-center p-2 xsm:h-2/4 mt-10">
        <div class="flex xsm:flex-col sm:flex-row md:flex-row justify-center items-center w-full md:w-3/4 lg:w-3/4 xsm:mt-10 border rounded-lg xsm:pb-4 bg-white">
          <div class="xsm:border-b-2 sm:border-r-2 md:border-r-2 lg:border-r-2 md:border-b-0 lg:border-b-0 border-gray-400">
            <img
              src={single_product.image}
              class="p-8 rounded-t-lg md:h-96 lg:96 sm:h- lg:h-96 xsm:h-80 md:w-96"
              alt="product"
            />
          </div>
          <div class="flex flex-col space-y-4 bg-white text-black rounded-b-md w-full h-full sm:border-l-2">
            <div class="p-4">
              <p class="text-2xl font-bold">{single_product.title}</p>
              <p class="text-red-700">{single_product.brand} brand</p>
            </div>
            <div>
              <p>{single_product.description}</p>
            </div>
            <div>
              <span class="text-2xl font-bold">
                Price : ${single_product.price}
              </span>
            </div>
            <div class="flex items-center mt-2.5 mb-5 justify-center">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-2xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {"3.9"}
              </span>
            </div>
            <div>
              <button
                class="bg-blue-500 rounded-md md:p-2 lg:p-2 hover:bg-blue-700 xsm:p-2 sm:p-1 xsm:text-[13px]"
                onClick={() => handleAddToCart(id)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
