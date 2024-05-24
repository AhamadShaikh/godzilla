import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts } from "../Redux/Product/action";
import ProductCard from "../Components/ProductCard";
import img1 from "../assets/img1.png";

const Home = () => {
  const home_products = useSelector(
    (store) => store.productReducer.home_products
  );

  //   console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeProducts());
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-6">
        <Carousel />
      </div>
      <div class="w-full h-80 mt-6 mb-6">
        <img src={img1} alt="dhamaka" className="w-full h-full" />
      </div>
      <div className="grid grid-cols-3 mt-6 gap-y-4 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center ml-4">
        {home_products?.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
