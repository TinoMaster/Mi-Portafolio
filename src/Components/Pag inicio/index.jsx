import React from "react";
import { Banner } from "./Banner";
import { BoxTechs } from "./BoxTechs";
import { Resume } from "./Resume";

export const PagInicio = () => {
  return (
    <div className="flex flex-col items-center w-full h-full p-2">
      <Banner />
      <BoxTechs />
      {/* <Resume /> */}
    </div>
  );
};
