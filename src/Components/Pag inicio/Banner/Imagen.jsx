import React from "react";
import svgReact from "../../SVGS/react.svg";
import svgAll from "../../SVGS/htmlCssJavascript.svg";
import svgCode from "../../SVGS/code.svg";
import image from "../../../assets/images/miFoto.jpg";

export const Imagen = () => {
  return (
    <div className="w-full h-full flex justify-end absolute md:w-10/12">
      {/* Caja de svgs izquierda*/}
      <div className="flex ">
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative -left-1 top-4 lg:top-10 lg:left-1"
          src={svgAll}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative -top-1 lg:top-1"
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
        <div className="w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white shadow-xl shadow-violet-500/50 overflow-hidden border-2 border-primary">
          <img
            src={image}
            alt="Principal"
            className="lg:top-8 top-4 relative scale-150"
          />
        </div>
      </div>

      {/* Caja de svgs derecha*/}
      <div className="flex flex-col items-center relative right-10 top-16 md:top-32 lg:top-40">
        <img
          onClick={
            "" /* () => window.open("https://github.com/TinoMaster", "_blank") */
          }
          className="my-2 hover:cursor-pointer w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-6 right-4 lg:right-16"
          src={svgAll}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-4 right-2 lg:right-10"
          src={svgReact}
          alt=""
        />
        <img
          className="my-2 w-8 h-8 lg:w-14 lg:h-14 rounded-full bg-neutral-800 shadow-md shadow-black/50 relative top-1 -right-4 lg:right-0"
          src={svgCode}
          alt=""
        />
      </div>
    </div>
  );
};
