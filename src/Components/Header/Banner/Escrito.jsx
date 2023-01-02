import React from "react";
import { TypedReactHooksDemo } from "../../exampleTypedJs";

export const Escrito = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-1/2 h-96 font-serif text-lg">
      {/* Escrito */}
      <div className="flex flex-col">
        <span className="block p-1">Hello,</span>
        <h2 className="font-serif text-5xl font-semibold text-violet-600">
          I'm Oscar
        </h2>
        <span className="block p-1">Web Designer & Developer.</span>
        <span className="p-1">
          technologies{" "}
          <span>
            <TypedReactHooksDemo />
          </span>
        </span>
        <button className="border-2 border-violet-800/80 p-2 w-1/2 my-2 rounded-md hover:border-violet-700 hover:cursor-pointer hover:bg-violet-600 hover:shadow-md hover:text-slate-200 transition-all">
          Contact me
        </button>
      </div>
    </div>
  );
};
