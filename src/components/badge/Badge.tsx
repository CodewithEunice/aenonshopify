import React from "react";

interface BadgeProps {
  content: number;
  children: React.ReactNode;
}

const Badge = ({ content, children }: BadgeProps) => {
  return (
    <div className=" relative">
      <div
        className=" bg-accent-400 w-[22px]
             flex items-center justify-center
             absolute top-[-12px] right-[-8px] 
             h-[22px] rounded-full"
      >
        {content}
      </div>
      {children}
    </div>
  );
};

export default Badge;
