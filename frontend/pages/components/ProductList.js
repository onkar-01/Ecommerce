import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <prodlist>
      <div className="main">
        <div className="title">
          <h2> Some of Our Special Prducts</h2>
        </div>
        <div className="prodlist">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </prodlist>
  );
};

export default ProductList;
