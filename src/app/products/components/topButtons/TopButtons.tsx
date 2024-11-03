import React from "react";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const TopButtons = () => {
  return (
    <div className="py-5 flex justify-between">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <MdKeyboardArrowLeft />
          Back
        </div>
      </Link>
      <div className="flex items-center cursor-pointer">
        <MdKeyboardArrowRight />
        Next
      </div>
    </div>
  );
};

export default TopButtons;
