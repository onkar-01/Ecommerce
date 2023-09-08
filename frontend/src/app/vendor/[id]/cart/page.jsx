"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "../../../screens/Cart";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo) {
      router.push("/auth/login");
    }
  }, [router, userInfo]);

  return <Cart />;
};

export default page;
