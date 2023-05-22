import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.querySelector("body");
      if (window && window.scrollY > 0) {
        body.classList.add("scrolled");
      } else {
        body.classList.remove("scrolled");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  var showMenu = false;
  const toggleMenu = () => {
    let burger = document.querySelector(".menu-btn__burger");
    const menuBth = document.querySelector(".menu-btn");
    const hamburger = document.querySelector(".menu-btn__burger");

    const nav = document.querySelector(".nav");
    const menuNav = document.querySelector(".menu-nav");
    const navItems = document.querySelectorAll(".menu-nav__item");

    if (!showMenu) {
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));
      showMenu = true;
    } else {
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));
      showMenu = false;
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="menu-btn" onClick={toggleMenu}>
          <span className="menu-btn__burger"></span>
        </div>
        <div className="logo">
          <Image src={Logo} width={200} height={40}></Image>
        </div>
      </div>
      <nav className="nav">
        <ul className="menu-nav">
          <li className="menu-nav__item active">
            <a href="#" className="menu-nav__link">
              Home
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="#" className="menu-nav__link">
              About Me
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="#" className="menu-nav__link">
              My Projects
            </a>
          </li>
          <li className="menu-nav__item">
            <a href="#" className="menu-nav__link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
