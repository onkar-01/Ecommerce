"use client";
import React, { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Login = () => {
  const [formData, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const router = useRouter();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [router, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault(); //isse voh automatic reload nhi hoga
    try {
      console.log(email);
      console.log(password);
      const res = await login({ email, password }).unwrap();
      console.log(res + ".....");
      dispatch(setCredentials({ ...res }));
      toast.success("Login Successfully");
      router.push("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <FormContainer>
        <div className="flex  bg-white md:w-2/4 lg:w-1/4 md:h-2/3 w-screen h-screen m-auto relative md:top-20  md:rounded-md flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <Image
              src="/1.png"
              alt="logo"
              width={200}
              height={100}
              className="ml-auto mr-auto hidden"
            />
            <h2 className="mt-10 text-center text-l sm:text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-6">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2 border-b border-gray-400">
                  <input
                    className="appearance-none bg-[transparent]  border-none    w-full text-gray-700 mr-3 py-1 px-2  p-24 "
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setForm({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#ff742e] hover:text-[#eb621d]"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 border-b border-gray-400">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    value={formData.password}
                    onChange={(e) =>
                      setForm({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={submitHandler}
                  className="flex w-full justify-center rounded-md bg-[#ff742e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#eb621d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb621d]"
                >
                  Sign in
                </button>
              </div>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <Link
                href="/auth/register"
                className="font-semibold leading-6 text-[#ff742e] hover:text-[#eb621d]"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

export default Login;