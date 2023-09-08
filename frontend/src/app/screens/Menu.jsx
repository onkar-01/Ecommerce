"use client";
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Products from "../components/Products";
import { Toast, ToastContainer } from "react-toastify";

const Menu = ({ id }) => {
  return (
    <div>
      <Title heading="All Products" />
      <Products id={id} />
      <ToastContainer />
    </div>
  );
};

export default Menu;
