import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import {
  getCartDataRequest,
  quantityIncrementRequest,
  removeCartProductRequest,
} from "../Redux/Cart/action";

const CartCard = ({
  data,
  handleQuantityIncrement,
  handleQuantityDecrement,
  handleRemove
}) => {
  const { id, title, quantity, description, image, price } = data;

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex xsm:flex-col sm:flex-row md:flex-row lg:flex-row lg:item-center justify-evenly border rounded-lg sm:h-86 md:h-86 lg:h-52 xsm:h-[500px] sm:60 mt-10 items-center bg-white text-black p-4 space-y-4 space-x-4">
        <div className="h-full flex items-center">
          <img src={image} alt={title} className="h-40 xsm:h-86 sm:h-96 w-52 md:h-48"  />
        </div>
        <div className="mb-2 flex flex-col justify-center items-center">
          <p className="font-bold lg:w-96 sm:w-60">{title}</p>
          <p className="lg:w-60 sm:w-64">
            {description.length > 20
              ? `${description.substring(0, 60)}...`
              : description}
          </p>
        </div>
        <div className="font-bold">${price}</div>
        <div className="flex space-x-2">
          <button
            className="bg-orange-500 rounded-md hover:bg-orange-700 px-2"
            disabled={quantity === 1}
            onClick={() => handleQuantityDecrement(id, data)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="bg-green-500 rounded-md hover:bg-green-700 px-2"
            disabled={quantity === 4}
            onClick={() => handleQuantityIncrement(id, data)}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="bg-red-500 rounded-md hover:bg-red-600 px-2"
            onClick={() => handleRemove(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
