import React from "react";
import { Resume } from "./Resume";
import { BoxImage } from "./BoxImage";

export const AboutMe = ({ darkMode }) => {
  return (
    <div className="w-full text-lg relative max-w-720p m-auto pt-5 rounded-md overflow-hidden">
      <div className="flex w-full justify-end">
        {/* img */}
        <BoxImage />
        {/* Escrito */}
        <Resume />
      </div>
    </div>
  );
};
