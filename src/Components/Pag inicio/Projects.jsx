import React from "react";
import { Gi3DStairs } from "react-icons/gi";

export const Projects = ({ darkMode }) => {
  return (
    <div className="flex flex-wrap justify-center w-full max-w-720p m-auto">
      <h2 className="w-full text-3xl font-medium pl-3 text-primary pt-10 pb-4">
        Projects
      </h2>
      <div className="w-full flex">
        <h3 className="w-4/5 py-5 text-2xl sm:text-4xl md:text-3xl font-serif px-3">
          Cada proyecto se construyo paso a paso
          <span className="text-secondary ml-1">
            <Gi3DStairs className="inline" />
          </span>{" "}
        </h3>
      </div>
      <div
        className={`flex flex-wrap justify-center w-full my-10 mx-3 lg:mx-0 rounded-lg ${
          !darkMode ? "bg-white/5" : "bg-white"
        }`}
      >
        <div className="flex items-center justify-center w-full h-[450px] lg:w-1/2 p-4">
          <div
            className={`w-full h-full ${
              !darkMode ? "bg-white/5" : "bg-slate-200"
            }  rounded-lg`}
          ></div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 p-8">
          <h3 className="w-full text-center text-lg font-semibold pb-6 lg:pb-10">
            Gestor de Ventas
          </h3>
          <p className="w-full text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            adipisci optio fuga veritatis maxime soluta possimus minima eos, eum
            commodi incidunt quos libero perspiciatis temporibus corrupti
            recusandae. Sapiente, nemo iusto.
          </p>
        </div>
      </div>
    </div>
  );
};
