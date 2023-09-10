"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Login from "@/app/screens/Login";

const page = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const router = useRouter();

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);
  return <Login />;
};

export default page;
