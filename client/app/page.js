"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Home from "./screens/Home";

const page = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
