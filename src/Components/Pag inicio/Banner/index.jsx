import React from "react";
import { Presentation } from "./Presentation";
import { mi_foto } from "../../../images";

export const Banner = () => {
  return (
    <section className="flex flex-wrap relative flex-row-reverse w-full justify-center py-10">
      
      {/* Imagen  */}
      <div className="w-full md:w-1/2  flex justify-center md:justify-end">
        <div className="w-60 h-60 shadow-xl shadow-primary/20 rounded-full bg-primary/80 overflow-hidden border-2 border-primary/30">
          <img
            src={mi_foto}
            alt="my_picture"
            className=" scale-125 translate-x-9 translate-y-9"
          />
        </div>
      </div>
      <Presentation />
    </section>
  );
};
