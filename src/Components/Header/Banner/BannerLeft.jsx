import React from "react";
import { TypedReactHooksDemo } from "../../exampleTypedJs";
import svgReact from "../../SVGS/react.svg";
import svgAll from "../../SVGS/htmlCssJavascript.svg";
import svgCode from "../../SVGS/code.svg";

export const BannerLeft = () => {
  return (
    <div className="flex flex-wrap justify-start items-center w-full md:w-1/2 my-5 font-serif text-lg">
      {/* Primera caja */}
      <div className="w-1/2 lg:w-1/3 flex lg:justify-center items-center relative">
        {/* Caja de svgs izquierda*/}
        <div className="flex flex-col lg:items-center">
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative left-5"
            src={svgAll}
            alt=""
          />
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50"
            src={svgReact}
            alt=""
          />
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative left-5"
            src={svgCode}
            alt=""
          />
        </div>

        {/* Caja imagen */}
        <div className="flex">
          <div className="w-24 h-24 lg:w-48 lg:h-48 rounded-full bg-white shadow-xl shadow-violet-500/20">
            <img src="" alt="" />
          </div>
        </div>

        {/* Caja de svgs derecha*/}
        <div className="flex flex-col items-center">
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative right-5"
            src={svgAll}
            alt=""
          />
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50"
            src={svgReact}
            alt=""
          />
          <img
            className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative right-5"
            src={svgCode}
            alt=""
          />
        </div>
      </div>

      {/* Segunda caja */}
      <div className="flex w-1/2 md:w-1/2 md:ml-4 flex-col lg:text-base text-sm">
        <span className="block p-1">Hello,</span>
        <h2 className="font-serif text-2xl lg:text-5xl font-semibold text-violet-600">
          I'm Oscar
        </h2>
        <span className="block p-1">Web Designer & Developer.</span>
        <span className="p-1">
          technologies{" "}
          <span className="absolute ml-1">
            <TypedReactHooksDemo />
          </span>
        </span>
        <button className="border-2 border-violet-800/80 px-2 py-1 w-1/3 my-2 rounded-md hover:border-violet-700 hover:cursor-pointer hover:bg-violet-600 hover:shadow-md hover:text-slate-200 transition-all">
          Contact me
        </button>
      </div>
    </div>
  );
};
