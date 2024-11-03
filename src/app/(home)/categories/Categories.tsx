"use client";

import Container from "@/components/container/Container";
import React from "react";
import Category from "../category/Category";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    id: 1,
    Category: "Wrist watches",
    img: "/assets/cat-watch.jpg",
  },
  {
    id: 2,
    Category: "Phones",
    img: "/assets/cat-phone.png",
  },
  {
    id: 3,
    Category: "Laptop",
    img: "/assets/cat-laptop.jpg",
  },
  {
    id: 4,
    Category: "Headphones",
    img: "/assets/cat-headphone.jpg",
  },
];

const Categories = () => {
  return (
    <section className="py-5 bg-secondary-100">
      <Container>
        <div>
          <h2 className="text-3xl mb-2 capitalize">categories</h2>
          <div
            className="relative 
          
          "
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-cat",
                prevEl: ".swiper-button-prev-cat",
              }}
              pagination={{
                el: ".swiper-pagination-cat",
                type: "bullets",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {categories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <Category category={cat.category} img={cat.img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center justify-center">
              <div className="swiper-pagination-cat"></div>
            </div>
            <div
              className="w-full h-full flex justify-between items-center
             absolute top-0 left-0 z-20"
            >
              <div className="swiper-button-prev-cat">
                <IoIosArrowBack size={25} />
              </div>
              <div className="swiper-button-next-cat">
                <MdOutlineNavigateNext size={30} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Categories;
