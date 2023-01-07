import React from "react";
import svgBanner from "../../SVGS/VectorsvgBanner.svg";
import { Imagen } from "./Imagen";
import { Presentation } from "./Presentation";

export const BannerRight = () => {
  return (
    <div className="flex justify-center  items-center w-full lg:w-1/2 overflow-hidden">
      <div className="w-full h-full relative lg:flex lg:justify-end">
        <div className="w-full lg:w-9/12 flex justify-center">
          <div className="flex items-end md:items-center justify-center w-9/12 m-auto h-5/6 md:h-full absolute">
            <Presentation />
          </div>

          <Imagen />
          {/* SVG */}
          <img src={svgBanner} alt="" className="w-full self-center" />
        </div>
      </div>
    </div>
  );
};
