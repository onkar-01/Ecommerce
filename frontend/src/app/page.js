"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import React from "react";

const page = () => {
  const router = useRouter();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) {
      router.push("/auth/login");
    }
  }, [router, userInfo]);

  return <div>page</div>;
};

export default page;
