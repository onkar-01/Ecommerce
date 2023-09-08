"use client";
import Vendors from "../components/Vendors";
import Loader from "../components/Loader";
import React, { Suspense, useEffect } from "react";
import Product_Card from "../components/Product_Card";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "../slices/cartSlice";
import Hero from "../components/Hero";
import Title from "../components/Title";
import Products from "../components/Products";
import Filter from "../components/Filter";
import { emptyCart } from "../slices/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyCart());
  }, []);
  return (
    <div className="">
      <Vendors />
      <ToastContainer />
    </div>
  );
};

export default Home;
