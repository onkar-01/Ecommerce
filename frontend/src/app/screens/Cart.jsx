"use client";
import { useEffect } from "react";
import CartItem from "../components/Cart";
import { toast, ToastContainer } from "react-toastify";

const cart = () => {
  return (
    <div>
      <CartItem />
      <ToastContainer />
    </div>
  );
};

export default cart;
