import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";
import { CgScreen } from "react-icons/cg";
import { GoServer, GoDatabase } from "react-icons/go";

export const Project = ({ darkMode, properties, index }) => {
  const {
    name,
    description,
    image,
    links,
    tegnologiesF,
    tegnologiesB,
    dataBase,
  } = properties;
  return (
    <div
      className={`flex flex-wrap ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center w-full my-10 mx-3 lg:mx-0 rounded-lg ${
        !darkMode ? "bg-white/5" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center w-full h-[300px] lg:h-full lg:w-1/2 px-4 py-7">
        <div
          className={`w-full h-full ${
            !darkMode ? "bg-white/5" : "bg-slate-200"
          }  rounded-lg overflow-hidden shadow-md`}
        >
          {" "}
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>
      {/* Caja de descripcion */}
      <div className="flex flex-col w-full lg:w-1/2 p-8 pb-0">
        <h3 className="w-full text-center text-lg font-semibold pb-6 lg:pb-10">
          {name}
        </h3>
        <p className="w-full  lg:text-base text-justify border-b-2 pb-2">
          {description}
        </p>
        {/* Seccion tegnologias que use */}
        <h3 className="pt-2 text-primary font-semibold">Tegnologies:</h3>
        <div className="flex pt-3 items-baseline w-full">
          <p className="flex items-center">
            <CgScreen className="mr-1" /> Frontend:
          </p>
          {tegnologiesF?.map((tech) => (
            <h4
              key={tech}
              className="mx-2 px-2 shadow shadow-black/30 rounded-md"
            >
              {tech}
            </h4>
          ))}
        </div>
        <div className="flex pt-3 items-baseline w-full">
          <p className="flex items-center">
            <GoServer className="mr-1" /> Backend:
          </p>
          {tegnologiesB?.map((tech) => (
            <h4
              key={tech}
              className="mx-2 px-2 shadow shadow-black/30 rounded-md"
            >
              {tech}
            </h4>
          ))}
        </div>
        <div className="flex pt-3 items-baseline w-full">
          <p className="flex items-center">
            <GoDatabase className="mr-1" /> DataBase:
          </p>
          <h4 className="mx-2 px-2 shadow shadow-black/30 rounded-md">
            {dataBase}
          </h4>
        </div>
        {/* Caja de links */}
        <div className="w-full flex flex-wrap py-8 justify-center">
          <button
            onClick={() => {
              window.open(links[0], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-green-500 hover:text-green-400 transition-colors"
          >
            <FaGithub className="mr-1 text-3xl" />{" "}
            <span className="text-xl">Code</span>
          </button>
          <button
            onClick={() => {
              window.open(links[1], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-violet-500 hover:text-violet-400 transition-colors"
          >
            <FaGithub className="mr-1 text-3xl" />{" "}
            <span className="text-xl">Code API</span>
          </button>
          <button
            onClick={() => {
              window.open(links[2], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <GiRapidshareArrow className="mr-1 text-3xl" />{" "}
            <span className="text-xl">Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
