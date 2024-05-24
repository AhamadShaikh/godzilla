import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/action";
import ProductCard from "../Components/ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";

const Products = () => {
  const products = useSelector((store) => store.productReducer.products);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const initialPage = parseInt(searchParams.get("page")) || 1;
  const initialLimit = parseInt(searchParams.get("per_page")) || 4;

  const [perPage, setPerPage] = useState(initialLimit);
  const [page, setPage] = useState(initialPage);
  const [pages, setPages] = useState(null);

  let obj = {
    params: {
      brand: searchParams.getAll("brand"),
      category: searchParams.getAll("category"),
    },
  };

  const handlePagination = (val) => {
    setPage(val);
  };

  useEffect(() => {
    setSearchParams({ page, per_page: perPage });
  }, [page, perPage]);

  useEffect(() => {
    dispatch(getProducts(page, perPage, obj)).then((res)=>{
      console.log(res.data.pages);
      setPages(res?.data.pages);
    })
  }, [page, perPage, dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newPage = parseInt(params.get("page")) || 1;
    const newPerPage = parseInt(params.get("per_page")) || 4;
    setPage(newPage);
    setPerPage(newPerPage);
  }, [location.search]);

  return (
    <div className="mt-6">
      <Navbar />
      <div className="flex gap-4">
        <Sidebar />
        <div>
          <div className="grid grid-cols-3 mt-6 gap-y-10 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 sm:grid-cols-2">
            {products?.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
          <div>
            {products?.length > 0 && (
              <Pagination pages={pages} handlePagination={handlePagination} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
