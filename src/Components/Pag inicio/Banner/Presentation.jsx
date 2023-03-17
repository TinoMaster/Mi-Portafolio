import React from "react";
import { TypedReactHooksDemo } from "../../exampleTypedJs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export const Presentation = () => {
  return (
    <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-3xl mt-8 md:mt-0 justify-center items-center md:items-start">
      <span className="block p-1">Hello,</span>
      <h2 className="font-serif text-4xl md:text-3xl xl:text-4xl font-semibold text-primary">
        I'm Oscar
      </h2>
      <span className="block p-1">Web Designer & Developer.</span>
      <span className="p-1 mr-28 md:m-0">
        Technologies{" "}
        <span className="absolute ml-1">
          <TypedReactHooksDemo />
        </span>
      </span>
      <button className="flex justify-center items-center font-serif font-medium border-2 border-secondary/50 px-2 py-1 shadow-lg shadow-secondary/10 lg:w-1/3 my-2 text-lg lg:text-lg z-10 hover:bg-secondary/80 hover:shadow-md hover:shadow-secondary/30 rounded-md hover:cursor-pointer transition-all">
        <FaWhatsapp className="mr-1 text-2xl lg:text-3xl rounded-full p-1" />
        Contact me
      </button>
      <div className="">
        <p>
          <FaGithub className=" rounded-full" />{" "}
        </p>
      </div>
    </div>
  );
};
