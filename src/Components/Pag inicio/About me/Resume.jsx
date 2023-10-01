import { motion } from "framer-motion";
import React from "react";
import { RiSuitcaseFill } from "react-icons/ri";
import { resumeAboutMe } from "../../../animation/framers";

export const Resume = () => {
  return (
    <motion.div
      variants={resumeAboutMe}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1 }}
      className="flex flex-col gap-4 lg:w-1/2 m-auto h-full"
    >
      <p className="w-full flex lg:text-lg gap-1 justify-center items-center lg:justify-start italic font-semibold">
        Welcome To My Portfolio.
        <span className="md:text-2xl hidden lg:flex">
          <RiSuitcaseFill className="bg-white/10 inline p-1 rounded-full shadow -translate-y-1 shadow-black/50" />
        </span>
      </p>

      <p className="w-full text-sm lg:text-base text-justify z-20">
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
      <div className="flex flex-col gap-3 ">
        <h4 className="font-semibold w-full italic">Languages:</h4>
        <div className="flex w-full gap-3">
          <p className="text-sm shadow-md p-1 rounded-md bg-white/5">
            Spanish: Native
          </p>
          <p className="text-sm shadow-md p-1 rounded-md bg-white/5">
            English: B1
          </p>
          <p className="text-sm shadow-md p-1 rounded-md bg-white/5">
            Italian: B1
          </p>
        </div>
      </div>
    </motion.div>
  );
};
