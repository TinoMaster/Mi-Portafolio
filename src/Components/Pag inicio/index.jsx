import React from "react";
import { Banner } from "./Banner";
import { BoxTechs } from "./BoxTechs";
import { Resume } from "./Resume";
import { mi_fondo1 } from "../../images";

export const PagInicio = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full relative overflow-hidden">
        {/* Fondo */}
        <div className="absolute w-full h-full">
          <img className="w-full" src={mi_fondo1} alt="" />
        </div>
        <div className="absolute bg-gradient-to-b from-black/80 to-darkMode w-full h-full"></div>
        <Banner />
      </div>
      <div className="w-full px-8">
        <BoxTechs />
      </div>
      <div className="bg-violet-900/5 md:bg-inherit">
        <Resume />
      </div>
    </div>
  );
};
