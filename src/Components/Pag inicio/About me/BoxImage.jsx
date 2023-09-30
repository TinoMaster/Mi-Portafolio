import React from "react";
import { vector2, vector3 } from "../../../svgs";

export const BoxImage = () => {
  return (
    <div className="flex w-full h-full absolute">
      <div className="hidden md:flex flex-col justify-end items-end gap-3 md:justify-center md:items-center py-10 px-16 md:p-0 w-full md:w-1/2 h-full overflow-hidden z-10">
        <img
          src={vector2}
          alt=""
          className="w-20 h-20 -translate-x-14 md:translate-x-0 border-2 border-primary bg-white/80 rounded-full md:w-64 md:h-64"
        />
        <img
          src={vector3}
          alt=""
          className="w-20 h-20 translate-x-4 md:translate-x-0 border-2 border-slate-900 bg-slate-800 rounded-full md:w-64 md:h-64"
        />
      </div>
    </div>
  );
};
