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
      className={`flex flex-wrap shadow-md ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center w-full rounded-lg ${
        !darkMode ? "bg-white/5" : "bg-white/70"
      }`}
    >
      <div className="flex items-center justify-center w-full h-[300px] lg:h-full md:w-1/2 px-4 py-7">
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
      <div className="flex flex-col w-full md:w-1/2 p-3 pb-0">
        <h3 className="w-full text-center text-l font-semibold pb-6 lg:pb-10">
          {name}
        </h3>
        <p className="w-full text-justify text-sm border-b-2 pb-2">
          {description}
        </p>
        {/* Seccion tegnologias que use */}
        <h3 className="pt-2 text-primary font-semibold">Tegnologies:</h3>
        {/* Frontend */}
        <div className="flex pt-3 items-baseline w-full text-sm">
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
        {/* Backend */}
        <div className="flex pt-3 items-baseline w-full text-sm">
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
        {/* Databases */}
        <div className="flex pt-3 items-baseline w-full text-sm">
          <p className="flex items-center">
            <GoDatabase className="mr-1" /> DataBase:
          </p>
          <h4 className="mx-2 px-2 shadow shadow-black/30 rounded-md">
            {dataBase}
          </h4>
        </div>
        {/* Caja de links */}
        {links.length > 0 ? (
          <div className="w-full flex flex-wrap py-8 justify-center">
            <button
              onClick={() => {
                window.open(links[0], "_blank");
              }}
              className="flex items-center mx-2 my-2 text-green-500 hover:text-green-400 transition-colors"
            >
              <FaGithub className="mr-1 text-2xl" />{" "}
              <span className="">Code</span>
            </button>
            <button
              onClick={() => {
                window.open(links[1], "_blank");
              }}
              className="flex items-center mx-2 my-2 text-violet-500 hover:text-violet-400 transition-colors"
            >
              <FaGithub className="mr-1 text-2xl" />{" "}
              <span className="">Code API</span>
            </button>
            <button
              onClick={() => {
                window.open(links[2], "_blank");
              }}
              className="flex items-center mx-2 my-2 text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              <GiRapidshareArrow className="mr-1 text-2xl" />{" "}
              <span className="">Demo</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex gap-2 flex-wrap py-8 justify-center">
            <p className="">Links:</p>
            <p className="">Soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};
