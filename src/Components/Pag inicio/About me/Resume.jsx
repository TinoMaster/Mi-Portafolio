import { motion } from "framer-motion";
import React from "react";
import { RiSuitcaseFill } from "react-icons/ri";
import { resumeAboutMe } from "../../../animation/framers";
import { FcPortraitMode } from "react-icons/fc";

export const Resume = () => {
  return (
    <motion.div
      variants={resumeAboutMe}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 lg:w-1/2 m-auto h-full"
    >
      <p className="w-full flex text-xl lg:text-lg gap-1 justify-center items-center font-semibold">
        <span className="flex items-center gap-2">
          <FcPortraitMode className="text-xl"/> Welcome To My Portfolio.
        </span>
        <span className="md:text-xl hidden lg:flex">
          <RiSuitcaseFill className="bg-white/10 inline p-1 rounded-full shadow -translate-y-1 shadow-black/50" />
        </span>
      </p>

      <p className="w-full lg:text-base text-lg text-justify font-light">
        "I am a Junior Web Developer with 4 years of experience in the field. My
        approach is autonomous and passionate in everything I do. I have the
        ability to take ownership of projects and adapt easily to different
        environments. My leadership allows me to drive solutions and ideas
        effectively, while my critical thinking enables me to analyze, define,
        and prioritize tasks efficiently. I always face challenges with a
        positive attitude and a smile. I am constantly in search of challenges
        that push me and a team of people who share the same ambition for
        continuous improvement."
      </p>
      <div className="flex flex-col gap-3 bg-black/5 p-3 rounded-md">
        <h4 className="font-semibold w-full text-center">Languages:</h4>
        <div className="flex w-full gap-3 justify-center">
          <p className="text-sm p-1">
            Spanish: Native
          </p>
          <p className="text-sm p-1">
            English: B1
          </p>
          <p className="text-sm p-1">
            Italian: B1
          </p>
        </div>
      </div>
    </motion.div>
  );
};
