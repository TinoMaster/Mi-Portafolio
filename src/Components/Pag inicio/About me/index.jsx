import React from "react";
import { Resume } from "./Resume";
import { BoxImage } from "./BoxImage";

export const AboutMe = ({ darkMode }) => {
  return (
    <div className="flex flex-wrap w-full gap-10 lg:gap-0">
      <p className="w-full font-semibold text-center lg:text-end lg:py-10 lg:text-xl text-primary">
        ABOUT ME
      </p>
      {/* img */}
      <BoxImage />
      {/* Escrito */}
      <Resume />
    </div>
  );
};
