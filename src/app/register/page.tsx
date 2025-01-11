"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container/Container";
import Button from "@/components/button/Button";
import * as z from "zod";

const inputWrapperStyle = "flex flex-col gap-2";
const inputStyle = "border-b-2 outline-none focus-visible:border-b-black";
const errorStyle = "text-sm text-red-500";

const schema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Not a valid email address"),
    password: z
      .string()
      .min(6, { message: "password will be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Enter your password again!" }),
    phoneNumber: z.string().min(1, { message: "Phone number is required!" }),
    address: z.string().min(1, { message: "Home address is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match!",
    path: ["confirmPassword"],
  });

const Register = () => {
  return (
    <main className=" bg-secondary-400 ">
      <section className="w-full min-h-screen  py-[120px] flex-1 px-5 flex items-center">
        <Container>
          <div
            className=" mx-auto px-5 py-10 rounded-2xl relative flex items-center
          z-10 shadow-2xl bg-white"
          >
            <div className="w-[1000px] mx-auto flex gap-16  items-center">
              <div className=" hidden sm:block">
                <Image
                  src="/assets/registerGraphic1.svg"
                  width={200}
                  height={200}
                  alt="Welcome svg image"
                />
              </div>
              <form className="flex-1 py-5 flex flex-col gap-5">
                <h1 className=" text-2xl md:text-4xl font-bold text-center">
                  Register <span className="text-accent-500">here</span>
                </h1>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className={inputStyle}
                  />
                </div>
                <div class={inputWrapperStyle}>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className={inputStyle}
                  />
                </div>
                <div class={inputWrapperStyle}>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className={inputStyle}
                  />
                </div>
                <div className={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <Button type="accent" size="big" rounded>
                    Register
                  </Button>
                </div>
              </form>
              <div class="hidden md:block">
                <Image
                  src="/assets/registerGraphic2.svg"
                  width={200}
                  height={200}
                  alt="Welcome svg image"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Register;
