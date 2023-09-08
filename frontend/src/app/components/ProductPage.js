"use client";
import React, { useState } from "react";

function ProductPage() {
  const [image, setImage] = useState(1);

  return (
    <div className="antialiased mt-[50px]">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                {/* Image Display */}
                <div
                  className={`h-64 md:h-80 rounded-lg bg-gray-100 mb-4 ${
                    image ? "flex" : "hidden"
                  } items-center justify-center`}
                >
                  <span className="text-5xl">{image}</span>
                </div>
                {/* ... (similar blocks for other images) ... */}
              </div>

              {/* Image Selector Buttons */}
              <div className="flex -mx-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 px-2">
                    <button
                      onClick={() => setImage(i)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                        image === i ? "ring-2 ring-indigo-300 ring-inset" : ""
                      }`}
                    >
                      <span
                        className="text-2xl"
                        onClick={(i) => {
                          setImage(i);
                        }}
                      >
                        {i}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* ... (other product details) ... */}
            <div className="md:flex-1 px-4">
              {/* Product Title */}
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              </h2>
              {/* ... (other product details) ... */}

              {/* Price and Savings */}
              <div className="flex items-center space-x-4 my-4">
                {/* Price */}
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-[#ff742e] mr-1 mt-1">$</span>
                    <span className="font-bold text-[#ff742e] text-3xl">
                      25
                    </span>
                  </div>
                </div>
                {/* Savings */}
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              {/* Product Description */}
              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              {/* Quantity Selector */}
              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  class="text-white bg-gradient-to-br from-[#fc8d55] to-[#ff742e] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-[#fa8e58] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
