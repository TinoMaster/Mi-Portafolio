import React from "react";
import { Presentation } from "./Presentation";

export const BannerLeft = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-primary/5 w-1/2 z-20 font-serif text-lg">
      <div className="flex flex-wrap absolute translate-x-5  rounded-md">
        <Presentation />
      </div>
    </div>
  );
};
