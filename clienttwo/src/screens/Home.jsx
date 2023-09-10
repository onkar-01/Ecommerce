import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Vendors from "../components/vendors";
import { emptyCart } from "../slices/cartSlice";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(emptyCart());
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [navigate, userInfo]);

  return (
    <div>
      <div className="p-4 mt-3 sm:ml-64">
        <Vendors />
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
