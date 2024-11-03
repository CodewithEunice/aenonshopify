import React from "react";
import Button from "@/components/button/Button";

const Content = () => {
  return (
    <main className="w-full h-screen pt-10 px-5 py-10 bg-orange-300">
      <h1 className=" text-3xl font-bold">LOGIN!</h1>
      <Button>Eunice login here</Button>
      <p
        className="before:content-[' '] before:w-[30px] before:h-[4px]
       before:bg-purple-500 before:absolute relative
       "
      >
        Mike
      </p>
    </main>
  );
};

export default Content;
