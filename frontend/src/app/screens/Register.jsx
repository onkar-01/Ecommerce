"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/userApiSlice";
import FormContainer from "../components/FormContainer";
import Link from "next/link";
import { setCredentials } from "../slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const [register] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const submitHandler = async (e) => {
    let formData = new FormData();
    e.preventDefault(); //isse voh automatic reload nhi hoga
    if (password !== confirmpassword) {
      toast.error("Password do not match");
    } else {
      try {
        formData.append("name", "onkar");
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", image);
        console.log(...formData);
        const res = await register(formData);
        console.log(res);
        dispatch(setCredentials({ ...res }));
        toast.success("Login Successfully");
        router.push("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        console.log(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <FormContainer className="w-">
        <div className="flex sm:mt-10 bg-white md:w-2/4 lg:w-1/2 md:h-2/3 w-screen h-screen m-auto relative  md:rounded-md flex-col justify-center px-6 py-12 lg:px-8 sm:mr-[80px] lg:mr-auto lg:pl-[150px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src="/1.png"
              alt="logo"
              width={200}
              height={100}
              className="ml-auto mr-auto hidden"
            />
            <h2 className="mt-6  text-center text-l sm:text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up to your account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-23 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                {image ? (
                  <Image
                    src={window.URL.createObjectURL(image)}
                    alt="profile"
                    width={100}
                    height={80}
                    className="ml-auto mr-auto"
                  />
                ) : (
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-center text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                )}

                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>

            <div className="space-y-6">
              <div>
                {/* <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label> */}
                <div className="mt-2 border-b border-gray-400">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    id="name"
                    autocomplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                {/* <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label> */}
                <div className="mt-2 border-b border-gray-400">
                  <input
                    className="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  {/* <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label> */}
                </div>
                <div className="mt-2 border-b border-gray-400">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    className="appearance-none bg-transparent  border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  {/* <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label> */}
                </div>
                <div className="mt-2 border-b border-gray-400">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    required
                    placeholder="Confirm Password"
                    className="appearance-none bg-transparent border-none  w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={submitHandler}
                  className="flex w-full justify-center rounded-md bg-[#ff742e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#eb621d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb621d]"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              already a member?{" "}
              <Link
                href="/auth/login"
                className="font-semibold leading-6 text-[#ff742e] hover:text-[#eb621d]"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Register;
