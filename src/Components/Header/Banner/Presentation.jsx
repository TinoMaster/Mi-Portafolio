import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TypedReactHooksDemo } from "../../exampleTypedJs";

export const Presentation = () => {
  return (
    <div className="flex absolute lg:relative w-full lg:w-1/2 lg:ml-4 flex-col md:text-3xl">
      <span className="block p-1">Hello,</span>
      <h2 className="font-serif text-4xl md:text-5xl font-semibold lg:text-primary">
        I'm Oscar
      </h2>
      <span className="block p-1">Web Designer & Developer.</span>
      <span className="p-1">
        Technologies{" "}
        <span className="absolute ml-1">
          <TypedReactHooksDemo />
        </span>
      </span>
      <button className="flex justify-center border-2 lg:border-primary/80 px-2 py-1 w-1/2 my-2 text-lg rounded-md lg:hover:border-primary lg:hover:cursor-pointer lg:hover:bg-primary hover:shadow-md hover:text-slate-200 transition-all">
        <FontAwesomeIcon
          icon={faPhone}
          className="mr-1 bg-white text-primary rounded-full p-1"
        />{" "}
        Contact me
      </button>
    </div>
  );
};
