"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Link from "next/link";

const VendorCard = ({ vendor }) => {
  const { avatar, name, _id } = vendor;
  const url = avatar.url;

  return (
    <div className=" p-4 md:w-[90%] mx-auto">
      <ul className=" space-y-3 m-auto w-[98%] ">
        <li>
          <Link
            href={`/vendor/${_id}`}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <Image
              src={url}
              alt="vendor-profile"
              height={20}
              width={20}
              className="w-10 h-10 rounded-lg"
            />
            <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

const Vendor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/v1/getvendors", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const responseData = await res.json();
        console.log(responseData);
        setData(responseData.users);
        setHydrated(true); // Moved this here to ensure it's only set when data is available
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);
  return <div></div>;
};

export default Vendor;
