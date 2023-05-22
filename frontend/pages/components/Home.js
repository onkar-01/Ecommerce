import React from "react";
import Main from "./Main";
import CategoryCard from "./CategoryCard";
import CategoryList from "./CategoryList";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="Home">
      <Main />
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default Home;
