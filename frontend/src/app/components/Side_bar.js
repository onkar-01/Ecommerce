"use client";
import React, { useEffect, useState } from "react";
import { initFlowbite } from "flowbite";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import dynamic from "next/dynamic";
import { setSearchKeyword } from "../slices/searchSlice";

const Side_bar = () => {
  const [search, setSearch] = useState(""); // for search input
  const [data, setData] = useState({ name: "", email: "" }); // for user object
  const [image, setImage] = useState(""); // for storing the JWT
  const userInfo = useSelector((state) => state.auth.userInfo);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const vendorId = useSelector((state) => state.vendor.vendorId);

  const router = useRouter();
  useEffect(() => {
    initFlowbite();
    try {
      if (!userInfo) {
        router.push("/auth/login");
      }
      if (userInfo) {
        setData({ name: userInfo.name, email: userInfo.email });
        setImage(userInfo.avatar);
      }
    } catch (err) {
      console.log("err", err);
    }
  }, []);

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    console.log(e.target.value);
    dispatch(setSearchKeyword(e.target.value));
  };
  const [logoutApiCall] = useLogoutMutation();
  const signoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      setData({ name: "", email: "" });
      setImage("");
      router.push("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.css"
        rel="stylesheet"
      />
      <div className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <HiOutlineMenuAlt1 size={24} />
              </button>
              <Link href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <img
                  src="/1.png"
                  className="h-10 w-30 mr-3"
                  alt="winkeat Logo"
                />
              </Link>
            </div>
            <div className="pt-2 hidden sm:block relative mx-auto  text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                onChange={(e) => searchHandler(e)}
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <BiSearch />
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  {userInfo ? (
                    <button
                      type="button"
                      className=""
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div className="flex flex-row bg-[#fff] active:bg-white ">
                        <p
                          className="text-md hidden sm:block  text-gray-900 font-[600] capitalize dark:text-white  mt-2"
                          role="none"
                        >
                          {userInfo.name}
                        </p>
                        <MdOutlineArrowDropDown className="hidden sm:block mt-3" />
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={userInfo.avatar.url}
                          alt="user photo"
                          height={100}
                          width={100}
                        />
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className=""
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <FaUserCircle className="w-10 h-10 rounded-full bg-[#fff]" />
                    </button>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <Link href={`/vendor/${vendorId}/cart`}>
                    <div className="cart-button bg-[#ff742e] rounded-full ml-1 pt-[5px] w-10 h-10 justify-item-center justify-center">
                      <HiShoppingBag
                        size={24}
                        color="white"
                        className="m-auto"
                      />
                      <p className="text-[9px] w-3 rounded-full text-center bg-white mt-[-8px] ml-auto mr-auto">
                        {cartItems.length}
                      </p>
                    </div>
                  </Link>
                )}

                {userInfo ? (
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white capitalize"
                        role="none"
                      >
                        {userInfo.name}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        {userInfo.email}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          data-modal-target="small-modal"
                          data-modal-toggle="small-modal"
                          className="block px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 w-full"
                          role="menuitem"
                        >
                          Settings
                        </button>
                      </li>

                      <li>
                        <p
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                          role="menuitem"
                          onClick={signoutHandler}
                        >
                          Sign out
                        </p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                        >
                          Sign Up
                        </Link>
                      </li>
                      <li>
                        <p
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                          role="menuitem"
                        >
                          Sign In
                        </p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          {userInfo ? (
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3 capitalize">Dashboard</span>
                </Link>
              </li>
              <li>
                <button
                  data-modal-target="small-modal"
                  data-modal-toggle="small-modal"
                  className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaUserAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3 capitalize">User</span>
                </button>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <AiOutlineUnorderedList className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3 capitalize">Active Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <BiFoodMenu className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3 capitalize">Previous Orders</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3 capitalize">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaSignInAlt className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3 capitalize">Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <GiNotebook className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3 capitalize">Sign Up</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {userInfo && (
        <div
          id="small-modal"
          tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-transparent rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <span className="sr-only">Open dropdown</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 3"
                    >
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    id="dropdown"
                    className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul className="py-2" aria-labelledby="dropdownButton">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          close
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={userInfo.avatar.url}
                    alt="user image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {userInfo.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {userInfo.email}
                  </span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Change the password
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(Side_bar), { ssr: false });
