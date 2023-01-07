import React from "react";

import svg_tech from "../../SVGS/SVTech.svg"
import { BoxTechs } from "./BoxTechs";

export const BannerLeft = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full md:w-1/2 my-20 font-serif text-lg">
      <div className="flex flex-wrap relative lg:w-[500px] overflow-hidden rounded-md">
        <h2 className="w-full text-center text-primary font-mono text-2xl">Technologies</h2>
        {/* SVG */}
        <div className="relative w-full flex justify-start">
        <BoxTechs />
          <img src={svg_tech} alt="" />
        </div>
        {/* Caja de tech */}
      </div>
    </div>
  );
};
