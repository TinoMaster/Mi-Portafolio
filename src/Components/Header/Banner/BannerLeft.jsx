import React from "react";
import { Presentation } from "./Presentation";

export const BannerLeft = () => {
  return (
    <div className="flex flex-wrap bg-black/10 justify-start items-center w-full md:w-1/2 my-5 font-serif text-lg">
      {/* Segunda caja */}
      <div className="hidden">
        <Presentation />
      </div>
    </div>
  );
};
