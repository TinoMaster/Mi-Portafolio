import React from "react";
import { mi_foto2 } from "../../../images";

export const Imagen = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-60 h-60 xl:w-72 xl:h-72 shadow-xl shadow-primary/20 rounded-full bg-primary/80 overflow-hidden border-2 border-primary/30">
        <img
          src={mi_foto2}
          alt="my_picture"
          className=" scale-125 translate-y-20 translate-x-2 xl:translate-y-28"
        />
      </div>
    </div>
  );
};
