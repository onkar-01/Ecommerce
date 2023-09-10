import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { setCredentials } from "../slices/authSlice";
import Link from "next/link";
import Image from "next/image";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    image: null,
  });

  const { name, email, phone, password, cpassword, image } = formData;

  const setImage = (file) => {
    setFormData({ ...formData, image: file });
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent automatic page reload

    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData(event.target);
      const response = await fetch("/api/v1/register", {
        method: "POST",
        body: formData,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section className="sm:bg-gray-50 ">
        <div className="flex flex-col items-center justify-center sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white sm:rounded-lg sm:shadow md:mt-0 sm:max-w-md xl:p-0 text-center">
            <div className="p-6 space-y-16 mt-[10px] sm:mt-[0px]   sm:space-y-4 md:space-y-6 sm:p-8">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl  font-semibold text-gray-900"
              >
                <img
                  className="w-[150px] h-[50px]  mx-auto"
                  src="/logo.png"
                  alt="logo"
                />
              </a>
              <h1 className="title font-['josefin-sans'] text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-23 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    {image ? (
                      <Image
                        src={window.URL.createObjectURL(image)}
                        alt="profile"
                        width={200}
                        height={100}
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
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
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
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="9999999999"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    value={phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    value={password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                    value={cpassword}
                    onChange={(e) =>
                      setFormData({ ...formData, cpassword: e.target.value })
                    }
                  />
                </div>

                <button
                  onClick={submitHandler}
                  className="w-full text-white bg-[#ff742e] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  have an account ?{" "}
                  <Link
                    href="/auth/login"
                    className="font-medium text-[#ff742e] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Register;
