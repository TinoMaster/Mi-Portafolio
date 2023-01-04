import React from "react";
import svgReact from "../../SVGS/react.svg";
import svgAll from "../../SVGS/htmlCssJavascript.svg";
import svgCode from "../../SVGS/code.svg";

export const Imagen = () => {
  return (
    <div className="w-full h-full lg:w-1/3 flex justify-end absolute md:w-10/12 lg:relative">
      {/* Caja de svgs izquierda*/}
      <div className="flex lg:items-center">
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative -left-1 top-4"
          src={svgAll}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative -top-1"
          src={svgReact}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative -right-2 -top-2"
          src={svgCode}
          alt=""
        />
      </div>

      {/* Caja imagen */}
      <div className="flex">
        <div className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white shadow-xl shadow-violet-500/20">
          <img src="" alt="" />
        </div>
      </div>

      {/* Caja de svgs derecha*/}
      <div className="flex flex-col items-center relative right-10 top-16 md:top-32">
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-6 right-4"
          src={svgAll}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-4 right-2"
          src={svgReact}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-1 -right-4"
          src={svgCode}
          alt=""
        />
      </div>
    </div>
  );
};
