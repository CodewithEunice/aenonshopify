import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";

interface CounterProps {
  itemQuantity: number;
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>;
}
const Counter = ({ itemQuantity, setItemQuantity }: CounterProps) => {
  const handleQuantity = (type) => {
    if (type === "increase") {
      setItemQuantity(itemQuantity + 1);
    } else {
      itemQuantity > 1 && setItemQuantity(itemQuantity - 1);
    }
  };

  return (
    <div className="w-40 px-5 mt-10 py-2 flex items-center justify-between rounded-full bg-white shadow">
      <button
        className="cursor-pointer"
        onClick={() => handleQuantity("decrease")}
      >
        <IoIosRemove />
      </button>
      <span className="">{itemQuantity}</span>
      <button
        onClick={() => handleQuantity("increase")}
        className="cursor-pointer"
      >
        <GrFormAdd />
      </button>
    </div>
  );
};

export default Counter;
