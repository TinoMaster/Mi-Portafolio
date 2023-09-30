import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { Project } from "./Project";
import { appLocal_dark, appDebts, appMercado } from "../../../images";

const properties = [
  {
    name: "Sales management",
    description:
      "This was my first completed and fully functional application, which has been in operation for three years for a business. It was a significant challenge because it incorporates many features and represented my first major learning experience.",
    image: appLocal_dark,
    links: [
      "https://github.com/TinoMaster/apklocal",
      "https://github.com/TinoMaster/api-local",
      "https://xn--sueovirtual-3db.com/",
    ],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
    dataBase: "MongoDB",
  },
  {
    name: "Debt management",
    description:
      "This application arose from the recurring need to manage debts with a friend effectively. It enabled both of us to have control over our debts, further enhancing my existing knowledge. The application effectively tracks debts with proper permissions, allowing each user to make changes according to their circumstances.",
    image: appDebts,
    links: [
      "https://github.com/TinoMaster/my_debts",
      "https://github.com/TinoMaster/debts_api",
      "https://debts.tinomaster.website/",
    ],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
    dataBase: "MongoDB",
  },
  {
    name: "Vitual Market",
    description:
      "This application was created out of the need to establish a platform where images played a central role in the project. It provided an opportunity to elevate my expertise in handling images across all aspects of website development. Furthermore, it served as a test of my ability to construct a project that, despite my technical knowledge, pushed the boundaries of my aesthetic skills.",
    image: appMercado,
    links: [],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
    dataBase: "MongoDB",
  },
];

export const Projects = ({ darkMode }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full m-auto ">
      <h2 className="w-full text-xl md:text-2xl font-semibold pl-3 text-primary lg:py-10">
        PROJECTS
      </h2>
      <div className="w-full flex">
        <h3 className="flex items-center gap-2 w-4/5 lg:py-5 text-xl sm:text-4xl md:text-2xl px-3">
          Built step by step
          <span className="ml-1 text-3xl">
            <Gi3DStairs className="inline bg-white/10 p-2 rounded-full shadow shadow-black/50" />
          </span>{" "}
        </h3>
      </div>
      {properties?.map((props, index) => (
        <Project
          key={props.name}
          darkMode={darkMode}
          properties={props}
          index={index}
        />
      ))}
    </div>
  );
};
