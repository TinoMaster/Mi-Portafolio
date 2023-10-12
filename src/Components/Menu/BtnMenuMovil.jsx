import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export const BtnMenuMovil = ({ switchMenu }) => {
  return (
    <div
      onClick={switchMenu}
      className="md:hidden shadow shadow-primary/40 p-2 mx-4 rounded-full"
    >
      <AiOutlineMenu className="text-3xl" />
    </div>
  );
};
