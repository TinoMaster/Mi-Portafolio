import React from "react";
import { Presentation } from "./Presentation";
import { Imagen } from "./imagen";
import { mi_fondo1 } from "../../../images";
import { BoxTechs } from "./BoxTechs.jsx";

export const Banner = ({ states }) => {
  return (
    <>
      <div className="w-full h-full relative">
        {/* Fondo */}
        <div className="absolute w-full h-full overflow-hidden">
          <img
            className="w-full object-cover h-full bg-transparent blur-md"
            src={mi_fondo1}
            alt=""
          />
        </div>
        <div
          className={`absolute bg-gradient-to-b ${
            !states.darkMode
              ? "from-darkMode/60 to-darkMode"
              : "from-lightMode/60 to-lightMode"
          }  w-full h-full`}
        ></div>
        <section className="flex flex-wrap relative max-w-720p m-auto flex-row-reverse w-full h-full items-center justify-center py-10 md:px-10">
          {/* Imagen  */}
          <Imagen darkMode={states.darkMode}/>
          <Presentation />
        </section>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center max-w-720p m-auto md:justify-cente px-8">
        <h3 className="text-xl lg:text-2xl text-center pb-2">Tech Stacks</h3>
        <BoxTechs />
      </div>
    </>
  );
};
