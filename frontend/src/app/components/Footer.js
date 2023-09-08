import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 w-[95%] mx-auto border-[#ff742e]">
      <footer className="bg-[#fff]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://winkeat.com/" className="flex items-center">
                <img
                  src="/1.png"
                  className="sm:h-[100px] mr-3"
                  alt="winkeat Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#ff742e] uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-[#000] dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#ff742e] uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-[#000]  font-medium">
                  <li className="mb-4">
                    <Link href="https://www.facebook.com/winkeat">
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="https://www.instagram.com/winkeat">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/winkeat">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-[#ff742e] uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-[#000]  font-medium">
                  <li className="mb-4">
                    <Link href="/privacypolicy">Privacy-Policy</Link>
                  </li>
                  <li>
                    <Link href="/termsandcondition">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#ff742e] sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center text-center sm:text-start sm:justify-between">
            <span className="text-sm text-[#000] sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://winkeat.com/" className="hover:underline">
                winkeat™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
