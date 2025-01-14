"use client";
import React from "react";
import Button from "@/components/button/Button";
import Card from "../components/card/Card";
import { Container } from "postcss";
import Image from "next/image";
import * as z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const errorStyle = "text-sm text-red-500";

const loginSchema = z.object({
  email: z
    .string()

    .email("Not a valid email address"),
  password: z
    .string()
    .min(6, { message: "password should not be less than 6 digits!" }),
});

type LoginDataType = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <main class="w-full min-h-screen relative flex pt-44 pb-5 md:pt-20 md:pb-0 bg-secondary-400">
      <section class="w-full flex-1 px-5 flex items-center">
        <div
          class="container mx-auto px-5 py-10 rounded-2xl relative flex items-center
          z-10 shadow-2xl bg-white"
        >
          <div
            className="md:hidden w-36 h-36 pt-6 rounded-full absolute top-0 left-1/2 -translate-x-1/2 
            -translate-y-1/2 -z-[1] text-4xl before:w-14 before:h-14 before:content-['L'] before:absolute
            before:top-4 before:left-1/2 before:-translate-x-1/2 before:rounded-full before:border-4 before:flex 
            before:justify-center before:items-center before:border-accent-500 font-bold 
            text-accent-500 bg-white"
          ></div>
          <div className="w-[1000px] mx-auto flex gap-16 items-center">
            <div className="hidden md:block">
              <Image
                src="/assets/registerGraphic1.svg"
                width={200}
                height={200}
                alt="Welcome svg image"
              />
            </div>

            <form
              onSubmit={handleSubmit(onsubmit)}
              className="flex-1 py-5 flex flex-col gap-5"
            >
              <h1 class="text-4xl mb-5 font-bold text-center">
                Login <span class="text-accent-500">here</span>
              </h1>
              <div class="flex flex-col gap-2 mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.email && (
                  <p className={errorStyle}>{errors.email?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="border-b-2 outline-none focus-visible:border-b-black"
                />
                {errors.password && (
                  <p className={errorStyle}>{errors.password?.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-max px-8 py-2 rounded-full text-white bg-accent-500
                false false false false transition-colors ease-in-out duration-300 hover:bg-opacity-70"
              >
                Login
              </button>
            </form>
          </div>
          <div className=" px-4 hidden md:block">
            <Image
              src="/assets/registerGraphic2.svg"
              width={200}
              height={200}
              alt="Welcome svg image"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
