import React, { useContext } from "react";
import AppContext from "../../../Contexts/appContext";
import { mi_foto } from "../../../images";

export const BannerRight = () => {
  const { states } = useContext(AppContext);
  return (
    <div className="flex justify-end items-center w-1/2 overflow-hidden">
      <div className="w-full h-full relative lg:flex lg:justify-end">
        <div
          className={`absolute w-full h-full bg-gradient-to-r${
            !states.darkMode
              ? ` from-darkMode  transition-transform delay-150`
              : ` from-lightMode transition-all delay-150`
          } `}
        ></div>
        <img src={mi_foto} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
