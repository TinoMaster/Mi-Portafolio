import React, { useContext } from "react";
import { Banner } from "./Banner";
import { BoxTechs } from "./BoxTechs";
import { Resume } from "./Resume";
import { mi_fondo1 } from "../../images";
import AppContext from "../../Contexts/appContext";

export const PagInicio = () => {
  const { states } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-full relative overflow-hidden">
        {/* Fondo */}
        <div className="absolute w-full h-full">
          <img
            className="w-full bg-transparent scale-150 md:scale-50 md:blur-md md:-translate-y-48 md:translate-x-40"
            src={mi_fondo1}
            alt=""
          />
        </div>
        <div
          className={`absolute bg-gradient-to-b ${
            !states.darkMode
              ? "from-darkMode/80 to-darkMode"
              : "from-white/80 to-white/20"
          }  w-full h-full`}
        ></div>
        <Banner />
      </div>
      <div className="w-full px-8 py-10">
        <h3 className="text-xl text-center pb-4">Tech Stacks</h3>
        <BoxTechs />
      </div>
      <div className="">
        <Resume />
      </div>
    </div>
  );
};
