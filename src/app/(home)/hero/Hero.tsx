import React from "react";
import Image from "next/image";
import Container from "@/components/container/Container";

const Hero = () => {
  return (
    <section className="pt-32 pb-5">
      <Container>
        <div
          className="h-72  text-white flex justify-between items-center
             bg-secondary-500"
        >
          <div
            className=" flex flex-1 md:flex-none justify-between md:justify-start
        gap-5 pl-5 md:static items-center"
          >
            <Image
              width={100}
              height={200}
              src="/assets/homeGraphic1.png"
              alt="Banner yellow image"
            />

            <p className="hidden Lg:block md:block text-xl md:text-3xl">
              <span className=" text-pink-500">HOT</span>
              SALES <br /> WEEK
            </p>
          </div>

          <div
            className=" relative h-52 w-52 bg-white  rounded-full flex
             justify-center items-center before:content-[''] before:absolute before:top-[8px]
              before:right-[8px] before:bottom-[8px] before:left-[8px] before:rounded-full before:border-4
               before:border-dashed before:border-black"
          >
            <p
              className="text-black text-3xl
                     font-bold opacity-80"
            >
              {" "}
              50% <br /> OFF
            </p>
          </div>
          <div className="flex pl-12 md:static pr-5 md:static items-center gap-5">
            <div className=" hidden Lg:block text-3xl">
              <p>
                A NEW <span className=" text-pink-500">GREAT LOOK</span>
              </p>
              <p className=" text-[#867EBC]">FOR NEW SEASON</p>
            </div>
            <Image
              width={100}
              height={200}
              src="/assets/homeGraphic3.png"
              alt="Banner black image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
