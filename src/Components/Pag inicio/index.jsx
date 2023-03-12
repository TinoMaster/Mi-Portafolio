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
              ? "from-black/80 to-darkMode"
              : "from-white/80 to-white/20"
          }  w-full h-full`}
        ></div>
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
