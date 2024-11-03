import React from "react";
import Button from "@/components/button/Button";

const flexBetween = "flex justify-between";

const Summary = () => {
  return (
    <div className="flex-1 border-2 rounded-2xl p-5">
      <div className="py-2 border-b-2">
        <h2 className="font-bold text-xl">Order Summary</h2>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Subtotal</span>
        <span className=" text-accent-500">$1300</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Estimated Shipping</span>
        <span className=" text-accent-500"> $10.00</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Discounted Shipping</span>
        <span className=" text-accent-500">$10.00</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Total</span>
        <span className=" text-accent-500">$1300</span>
      </div>
      <Button type="primary" size="big" width="full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
