import React from "react";
import { Gi3DStairs } from "react-icons/gi";
import { Project } from "./Project";

const properties = [
  {
    name: "Gestor de ventas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci optio fuga veritatis maxime soluta possimus minima eos, eum commodi incidunt quos libero perspiciatis temporibus corrupti recusandae. Sapiente, nemo iusto.",
    image:
      "https://quericomambo.mx/wp-content/uploads/2021/09/mambo-agencia-creativa-asp-contadores-portada-768x441.jpg",
    links: [],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
  },
  {
    name: "Mercado",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci optio fuga veritatis maxime soluta possimus minima eos, eum commodi incidunt quos libero perspiciatis temporibus corrupti recusandae. Sapiente, nemo iusto.",
    image:
      "https://esquio.es/wp-content/uploads/2022/11/diseno_web_profesional_negocio_online.jpg",
    links: [],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
  },
  {
    name: "Sueño Virtual",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est adipisci optio fuga veritatis maxime soluta possimus minima eos, eum commodi incidunt quos libero perspiciatis temporibus corrupti recusandae. Sapiente, nemo iusto.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBUOzY6Zd0yTLm3k8mNUmdGjn2UajWeQj9MA-cPiSC8pv-d2TIzRu_R0rzDbb81P7Stc&usqp=CAU",
    links: [],
    tegnologiesF: ["React", "Tailwind CSS"],
    tegnologiesB: ["Nodejs", "Express"],
  },
];

export const Projects = ({ darkMode }) => {
  return (
    <div className="flex flex-wrap justify-center w-full max-w-720p m-auto font-serif">
      <h2 className="w-full text-xl md:text-2xl font-semibold pl-3 text-primary py-6 lg:py-10">
        PROJECTS
      </h2>
      <div className="w-full flex">
        <h3 className="w-4/5 py-2 lg:py-5 text-2xl sm:text-4xl md:text-3xl px-3">
          Cada proyecto se construyo paso a paso
          <span className="text-secondary ml-1 text-3xl">
            <Gi3DStairs className="inline bg-white/10 p-1 rounded-full shadow shadow-black/50 border-2 border-white/10 text-slate-300" />
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
