"use client";
import { useState } from "react";
import React, { Children } from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import Badge from "../badge/Badge";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "../container/Container";
const styles =
  "relative before:content-[' '] before:w-[80%] before:h-1 before:bg-accent-700 before:scale-0 before:left-0 before:duration-500 before:transition-all before:bottom-[-4px] before:absolute  before:origin-left";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header
      className=" fixed w-full py-5 z-40 text-whitehover:before:scale-100
     bg-primary-700 gap-5"
    >
      <Container>
        <div className="flex justify-between items-center gap-5 font-bold">
          <div
            className=" z-10 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <MdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
          <div
            className="text-3xl text-primary-500 font-bold z-10
        "
          >
            AENON
            <span className=" text-accent-500">SHOP</span>
          </div>
          <form className="flex">
            <input
              type="text"
              placeholder="search"
              className="py-2 px-2 border-none
           w-full md:w-[300px]"
            />
            <button
              type="submit"
              className="
             bg-accent-400 py-2 
             px-5 border-none cursor-pointer"
            >
              search
            </button>
          </form>
          <div
            className=" flex items-center
         gap-5"
          >
            <nav
              className={`w-full md:w-auto h-screen md:h-auto
          absolute md:static top-0 bg-secondary-500 md:bg-transparent transition-all
          duration-300 ease-in 
          ${showMenu ? "left-0" : "left-[-100%]"}`}
            >
              <ul
                className="flex flex-col md:flex-row md:items-center mt-24 md:mt-0  px-5 md:px-0 
              gap-5 text-2xl font-bold md:text-base text-black md:text-white"
              >
                <li
                  className="{`${styles}`}"
                  onClick={() => setShowMenu(false)}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className=" {`${styles}`}
              onClick={() => setShowMenu(false)}"
                >
                  <Link href="/register">Register</Link>
                </li>
                <li
                  className="{`${styles}`}
              onClick={() => setShowMenu(false)}"
                >
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </nav>
            <Badge content={3}>
              <Link href="/cart">
                <BsCart3 size={30} color="white" />
              </Link>
            </Badge>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
