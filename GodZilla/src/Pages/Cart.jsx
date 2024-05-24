import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartDataRequest,
  quantityDecrementRequest,
  quantityIncrementRequest,
  removeCartProductRequest,
} from "../Redux/Cart/action";
import CartCard from "../Components/CartCard";
import Navbar from "../Components/Navbar";

const Cart = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const [totalCartItems, setTotalCartItems] = useState(cartData.length || 0);

  const cartTotalFun = () => {
    let total = cartData?.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    return total.toFixed(2);
  };

  const handleQuantityIncrement = (id, data) => {
    dispatch(quantityIncrementRequest(id, data)).then(() => {
      dispatch(getCartDataRequest());
    });
  };

  const handleQuantityDecrement = (id, data) => {
    dispatch(quantityDecrementRequest(id, data)).then(() => {
      dispatch(getCartDataRequest());
    });
  };

  const handleRemove = (id) => {
    dispatch(removeCartProductRequest(id)).then((res)=>{
      dispatch(getCartDataRequest()).then((res)=>{
        setTotalCartItems(res.data.length);
      })
    })
  };
console.log(totalCartItems);
  useEffect(() => {
    dispatch(getCartDataRequest());
  }, [dispatch]);

  useEffect(() => {
    setCartTotal(cartTotalFun());
    setTotalCartItems(cartData.length || 0);
  }, [cartData]);

  return (
    <div className="md:flex space-x-4">
      <div>
        <Navbar totalCartItems={totalCartItems} />
      </div>
      <div>
        {cartData.length > 0 ? (
          cartData?.map((product) => (
            <CartCard
              key={product.id}
              data={product}
              handleQuantityIncrement={handleQuantityIncrement}
              handleQuantityDecrement={handleQuantityDecrement}
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <h1>No Products Found</h1>
        )}
      </div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border mt-10 border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $7,592.00
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-600">
                  -$299.00
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Store Pickup
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $99
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $799
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                {cartTotal}
              </dd>
            </dl>
          </div>

          <a
            href="#"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
