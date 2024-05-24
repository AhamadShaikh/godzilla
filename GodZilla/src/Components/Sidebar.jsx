import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const initialCategory = searchParams.getAll("category");
  const initialSortBy = searchParams.get("sort_by");
  const initialOrder = searchParams.get("order");

  const [brand, setBrand] = useState(initialBrand || []);
  const [category, setCategory] = useState(initialCategory || []);
  const [sortBy, setSortBy] = useState(initialSortBy || "");
  const [order, setOrder] = useState(initialOrder || "");

  const handleBrand = (e) => {
    let newBrand = [...brand];
    let { value } = e.target;

    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((ele) => ele !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };

  const handleCategory = (e) => {
    let newCategory = [...category];
    let { value } = e.target;

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let param = {
      brand,
      category,
      // sort_by: sortBy,
      // order,
    };

    // Clean up the params object by removing any empty values
    // for (let key in params) {
    //   if (params[key].length === 0 || !params[key]) {
    //     delete params[key];
    //   }
    // }

    setSearchParams(param);
  }, [brand, category]);

  return (
    <div className="border border-l-0 border-b-0 pr-1 xsm:text-[12px] border-t-0 mt-6 sm:text-md md:text-md lg:text-lg">
      <div>
        <span className="flex font-bold">Filter by Brand</span>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="Generic"
            defaultChecked={brand.includes("Generic")}
            onChange={handleBrand}
          />
          <label>Generic</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="WD"
            defaultChecked={brand.includes("WD")}
            onChange={handleBrand}
          />
          <label>WD</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="Fjallraven"
            defaultChecked={brand.includes("Fjallraven")}
            onChange={handleBrand}
          />
          <label>Fjallraven</label>
        </div>
      </div>
      <div className="mt-6">
        <span className="flex font-bold">Filter by Category</span>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="jewelery"
            defaultChecked={category.includes("jewelery")}
            onChange={handleCategory}
          />
          <label>jewelery</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="electronics"
            defaultChecked={category.includes("electronics")}
            onChange={handleCategory}
          />
          <label>electronics</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="checkbox"
            value="men's clothing"
            defaultChecked={category.includes("men's clothing")}
            onChange={handleCategory}
          />
          <label>men's clothing</label>
        </div>
      </div>
      <div className="flex flex-col text-left mt-6">
        <span>Sort by</span>
        <select value={sortBy} onChange={handleSortBy} className="bg-black text-white">
          <option value="">Select</option>
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="mt-6">
        <span className="flex font-bold">Order</span>
        <div className="flex space-x-2">
          <input
            type="radio"
            name="order"
            value="asc"
            checked={order === "asc"}
            onChange={handleOrder}
          />
          <label>Ascending</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="radio"
            name="order"
            value="desc"
            checked={order === "desc"}
            onChange={handleOrder}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
