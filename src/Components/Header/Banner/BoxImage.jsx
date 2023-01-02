import React from "react";
import reactSvg from "../../SVGS/react.svg";
import allSvg from "../../SVGS/htmlCssJavascript.svg";
import codeSvg from "../../SVGS/code.svg";

export const BoxImage = () => {
  return (
    <div className="flex justify-center w-1/2 bg-slate-100 relative">
      <div className="w-28 h-28 absolute left-32 top-14">
        <img src={reactSvg} alt="" />
      </div>
      <div className="w-28 h-28 absolute left-20 top-44">
        <img src={allSvg} alt="" />
      </div>
      <div className="w-28 h-28 absolute left-32 top-72">
        <img src={codeSvg} alt="" />
      </div>
    </div>
  );
};
