import React from "react";

interface containerProps {
  children: React.ReactNode;
}
const Container = ({ children }: containerProps) => {
  return <div className=" container">{children}</div>;
};

export default Container;
