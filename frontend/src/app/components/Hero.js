import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const downArrowHandller = (e) => {
    return window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        height={1080}
        width={1920}
        source
        src="/Hero.png"
        alt="Hero"
      />
      <div className="absolute inset-0 flex items-center justify-center"></div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <Link to="content" smooth={true} duration={1000}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="relative m-auto top-[95%]  transform -translate-x-1/2 animate-bounce w-10 h-10 cursor-pointer"
            onClick={downArrowHandller}
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
