import React from "react";
import Card from "../components/card/Card";

const page = () => {
  return (
    <main className="w-full h-screen pt-10 px-5 py-10 bg-purple-500">
      <div
        className=" bg-pink-300 w-[40%] mt-20 flex items-center justify-center
       py-3 rounded-3xl"
      >
        <Card
          title=" card Register page"
          description=" REGISTRATION CARD"
          button="Register here"
        />
      </div>
    </main>
  );
};

export default page;
