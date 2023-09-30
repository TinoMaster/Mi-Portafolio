import React from "react";
import { RiSuitcaseFill } from "react-icons/ri";

export const Resume = () => {
  return (
    <div className="flex flex-col w-11/12 md:w-1/2 m-auto md:mr-10 h-full z-10">
      <p className="w-full text-xl md:text-2xl font-semibold text-end mr-5 text-primary py-6 lg:py-10">
        ABOUT ME
      </p>
      <p className="flex items-center gap-1 w-4/5 text-xl sm:text-4xl md:text-2xl">
        Welcome to my web portfolio.{" "}
        <span className="md:text-3xl">
          <RiSuitcaseFill className="bg-white/10 inline p-1 rounded-full shadow -translate-y-1 shadow-black/50" />
        </span>
      </p>
      <p className="w-full sm:text-2xl text-justify  pt-10 z-20">
        "Hello, the world of programming is my true passion. I wake up every day
        with the constant aspiration to add value to my surroundings. I firmly
        believe in my ability to accomplish any goal I set for myself. Several
        years ago, I embarked on this journey independently, and programming has
        unquestionably become my top priority and greatest love. I am confident
        that my dedication, commitment, and thirst for growth can contribute
        significantly wherever I go. My portfolio serves as a testament to the
        skills I have honed thus far, and I am certain that I will continue to
        expand my capabilities. If you are seeking someone with my skill set,
        there's no need to look any further – you've just found the right
        person!"
      </p>
      <div className="pt-5 flex flex-col gap-3 py-5">
        <h4 className="font-semibold text-lg w-full">Languages:</h4>
        <div className="flex w-full gap-3">
          <p className="text-sm md:text-base shadow-md p-1 rounded-md bg-white/5">
            Spanish: Native
          </p>
          <p className="text-sm md:text-base shadow-md p-1 rounded-md bg-white/5">
            English: B1
          </p>
          <p className="text-sm md:text-base shadow-md p-1 rounded-md bg-white/5">
            Italian: B1
          </p>
        </div>
      </div>
    </div>
  );
};
