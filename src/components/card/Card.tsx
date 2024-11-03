import { title } from "process";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  button: string;
}

const Card = ({ title, description, button }: CardProps) => {
  return (
    <div
      className=" flex flex-col px-5 py-10
     border-none items-center "
    >
      <h1
        className=" font-semibold text-2xl
       text-black"
      >
        {title}
      </h1>
      <p className=" mt-5 text-lg text-center">{description}</p>
      <button
        className=" mt-10 px-5 py-2 border-none rounded-full
       text-black"
      >
        {button}
      </button>
    </div>
  );
};

export default Card;
