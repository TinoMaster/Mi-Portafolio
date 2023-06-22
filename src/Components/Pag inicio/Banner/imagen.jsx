import React from "react";
import { mi_foto2 } from "../../../images";

export const Imagen = ({ darkMode }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className={`w-60 h-60 xl:w-80 xl:h-80 shadow-xl shadow-primary/20 rounded-full ${!darkMode ? "bg-primary/60":"bg-primary/10"}  overflow-hidden border-2 border-primary/50`}>
        <img
          src={mi_foto2}
          alt="my_picture"
          className=" scale-150 translate-y-40 translate-x-2 xl:translate-y-52"
        />
      </div>
    </div>
  );
};
