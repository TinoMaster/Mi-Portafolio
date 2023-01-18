import React from "react";
import { TypedReactHooksDemo } from "../../exampleTypedJs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export const Presentation = () => {
  return (
    <div className="flex flex-col text-xl md:text-4xl">
      <span className="block p-1">Hello,</span>
      <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary">
        I'm Oscar
      </h2>
      <span className="block p-1">Web Designer & Developer.</span>
      <span className="p-1">
        Technologies{" "}
        <span className="absolute ml-1">
          <TypedReactHooksDemo />
        </span>
      </span>
      <button className="flex justify-center items-center font-serif font-medium border-2 px-2 py-1 w-8/12 lg:w-1/2 my-2 text-sm lg:text-lg z-10 hover:bg-white/10 rounded-md hover:cursor-pointer hover:shadow-md hover:text-slate-200 transition-all">
        {/*  <FontAwesomeIcon
          icon={faPhone}
          className="mr-1 bg-white text-secondary rounded-full p-1"
        /> */}{" "}
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
