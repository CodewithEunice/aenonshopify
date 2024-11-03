import React from "react";
import Button from "@/components/button/Button";

import Card from "../components/card/Card";

const page = () => {
  return (
    <main
      className="w-full h-screen pt-10 px-5 py-10
     bg-white"
    >
      <h1 className=" text-3xl font-bold">LOGIN!</h1>
      <Button>Eunice login here</Button>
      <p
        className="before:content-[' '] before:w-[30px] 
        before:h-[4px] 
       before:bg-purple-500  before:bottom-0 before:absolute relative
       "
      >
        Emma
      </p>
      <div className="flex">
        <p
          className=" after:content-[' '] after:w-[20px]
         after:h-[20px] after:bg-red-500
       after:rounded-full  after:absolute relative"
        >
          what the fuck!
        </p>
      </div>
    </main>
  );
};

export default page;
