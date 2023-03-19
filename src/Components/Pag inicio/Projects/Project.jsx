import React from "react";

export const Project = ({ darkMode, properties, index }) => {
  const { name, description, image, links } = properties;
  return (
    <div
      className={`flex flex-wrap ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center w-full my-10 mx-3 lg:mx-0 rounded-lg ${
        !darkMode ? "bg-white/5" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center w-full h-[300px] lg:h-[400px] lg:w-1/2 p-4">
        <div
          className={`w-full h-full ${
            !darkMode ? "bg-white/5" : "bg-slate-200"
          }  rounded-lg overflow-hidden shadow-md`}
        >
          {" "}
          <img className="w-full h-full object-cover" src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/2 p-8">
        <h3 className="w-full text-center text-lg font-semibold pb-6 lg:pb-10">
          {name}
        </h3>
        <p className="w-full text-center">{description}</p>
      </div>
    </div>
  );
};
