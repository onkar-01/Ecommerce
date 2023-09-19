import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Vendors from "../components/vendors";
import { emptyCart } from "../slices/cartSlice";
import NoPage from "./NoPage";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(emptyCart());
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [userInfo]);
  if (userInfo.role === "user") {
    return (
      <div className="mt-20">
        <Vendors />
        <Toaster />
      </div>
    );
  } else if (userInfo.role === "vendor") {
    return navigate("/dashboard");
  }
  return navigate("/page-not-found");
};

export default Home;
