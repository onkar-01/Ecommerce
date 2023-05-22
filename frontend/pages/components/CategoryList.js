import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <catlist>
      <div className="main">
        <div className="title">
          <h2> Shop by Categories</h2>
        </div>
        <div className="catlist">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </catlist>
  );
};

export default CategoryList;
