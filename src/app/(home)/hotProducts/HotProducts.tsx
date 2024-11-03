"use client";

import Button from "@/components/button/Button";
import Container from "@/components/container/Container";
import Product from "@/components/product/Product";
import { products } from "@/data";
import Link from "next/link";
import { title } from "process";
import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HotProducts = () => {
  const buttons = [
    {
      id: 1,
      title: "All",
      active: "all",
    },

    {
      id: 2,
      title: "Watch",
      active: "watch",
    },
    {
      id: 3,
      title: "Phone",
      active: "phone",
    },
    {
      id: 4,
      title: "Laptop",
      active: "laptop",
    },
    {
      id: 5,
      title: "Headphone",
      active: "headphone",
    },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const [active, setActive] = useState("all");
  const [price, setPrice] = useState("10");
  const [open, setOpen] = useState(false);
  return (
    <section className="py-5">
      <Container>
        <div className="flex justify-between">
          <h2 className=" hidden md:block mb-2 capitalize text-3xl">
            our hot products
          </h2>
          <div className="md:hidden">
            <Button type="accent" size="small" handleClick={handleClick}>
              Filter
            </Button>
          </div>
          <Link href="/products">
            <span className="underline text-accent-500 flex font-bold items-center">
              All Products
              <MdKeyboardDoubleArrowRight fontSize={30} />
            </span>
          </Link>
        </div>
        <div className="relative flex gap-5 mt-5">
          <div
            className={` absolute md:static top-0 z-10 transition-all duration-300 
               ease-in-out flex-1 py-7 px-5 bg-white shadow -translate-x-[100vw] md:translate-x-0
            ${open ? "left-0" : "left-[-100%]"}`}
          >
            <h2 className="text-2xl font-bold opacity-80"> Categories</h2>
            <ul>
              {buttons.map((button) => (
                <li key={button.id}>
                  <button
                    className={` ${
                      active === button.active
                        ? " px-2 text-white bg-orange-300"
                        : ""
                    } w-4/5 mt-3 border-b-2 text-left cursor-pointer`}
                    onClick={() => setActive(button.active)}
                  >
                    {button.title}
                  </button>
                </li>
              ))}
            </ul>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Brand</h2>
            <select className="border-2">
              <option value="all">All</option>
              <option value="hp">HP</option>
              <option value="dell">Dell</option>
              <option value="apple">Apple</option>
              <option value="techno">Techno</option>
              <option value="infinix">Infinix</option>
              <option value="samsung">Samsung</option>
            </select>
            <h2 className="mt-[15px] text-2xl font-bold opacity-80">Price</h2>
            <input
              type="range"
              min={10}
              max={20000}
              value={price}
              className="w-4/5"
              onChange={(event) => setPrice(event.target.value)}
            />
            <div className="flex justify-between w-4/5">
              <span>${price}</span>
              <span>$20,000</span>
            </div>
            <Button size="big" type="accent">
              Clear Filter
            </Button>
          </div>
          <div className=" w-full md:w-[80%]">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper.button-next",
                prevEl: ".swiper.button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                type: "bullets",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <Product item={item} showBlackButton objectContain />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="button-swiper">
              <div className="swiper-button-prev"></div>

              <div className="swiper-pagination"></div>

              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HotProducts;
