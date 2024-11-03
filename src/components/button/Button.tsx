import { title } from "process";
import React from "react";

interface ButtonProps {
  size: string;
  type: string;
  width?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ width, type, size, handleClick, children }: ButtonProps) => {
  return (
    <button
      className={` px-8 py-2 text-white  rounded-lg transition-all cursor-pointer duration-300
        ${width === "full" ? "w-full" : ""}
        ${size === "big" ? "px-8 py-2" : "px-3 py-2"}
        ${type === "primary" ? "bg-primary-500 hover:bg-primary-500/80" : ""}
         ${type === "accent" ? "bg-accent-500 hover:bg-accent-500/80" : ""}
          ${type === "neutral" ? "bg-black hover:bg-black/80" : ""}
        `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
