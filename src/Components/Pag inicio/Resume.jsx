import React from "react";
import { mi_foto2 } from "../../images";
import {vector2,vector3} from "../../svgs"
import { RiSuitcaseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Resume = ({ darkMode }) => {
  return (
    <div className="w-full text-lg relative max-w-720p m-auto pt-5 rounded-md overflow-hidden font-serif">
      <div className="flex w-full justify-end">
        {/* img */}
        <div className="flex w-full h-full absolute">
          <div
            className={`w-full h-full ${!darkMode ?"bg-zinc-900" :""}  absolute rounded-md`}
          ></div>
          <div className="flex flex-col justify-end items-end gap-3 md:justify-center md:items-center py-10 px-16 md:p-0 w-full md:w-1/2 h-full overflow-hidden z-20">
            <img
              src={vector2}
              alt=""
              className="w-20 h-20 -translate-x-14 md:translate-x-0 border-2 border-primary bg-white/80 rounded-full md:w-64 md:h-64"
            />
            <img
              src={vector3}
              alt=""
              className="w-20 h-20 translate-x-4 md:translate-x-0 border-2 border-slate-900 bg-slate-800 rounded-full md:w-64 md:h-64"
            />
          </div>
          <div className={`w-full h-full bg-gradient-to-r ${!darkMode ?"from-zinc-900/90 to-zinc-900":""}  absolute`}></div>
        </div>
        {/* Escrito */}
        <div className="flex flex-col w-11/12 md:w-1/2 m-auto md:mr-10 h-full z-10">
          <p className="w-full text-xl md:text-2xl font-semibold text-end mr-5 text-primary py-6 lg:py-10">
            ABOUT ME
          </p>
          <p className="w-4/5 text-2xl sm:text-5xl md:text-4xl text-end font-serif lg:py-6">
            Bienvenido a mi portafolio web.{" "}
            <span className="text-3xl">
              <RiSuitcaseFill className="inline bg-white/10 p-1 rounded-full shadow lg:-translate-y-1 shadow-black/50 border-2 border-white/10 text-slate-300" />
            </span>
          </p>
          <p className="w-full sm:text-2xl text-justify font-serif pt-10 z-20">
            Soy un desarrollador con poca experiencia en las tecnologías de
            Stack MERN, así como en HTML, CSS, JavaScript y GitHub. He trabajado
            en diversos proyectos web utilizando estas tecnologías y me apasiona
            seguir aprendiendo y creciendo en este campo. En mi portafolio
            podrás encontrar una muestra de mi trabajo y mi experiencia. Si
            estás buscando un desarrollador web con habilidades en las
            tecnologías mencionadas, no dudes en ponerte en contacto conmigo.
          </p>
          <div className="pt-5">
            <h4 className="font-semibold text-lg">Idiomas:</h4>
            <p>Español: Nativo</p>
            <p>Ingles: Nivel B2</p>
          </div>
          <div className="pb-10 pt-5">
            <Link
              to={"/acerca"}
              className="py-2 px-4 bg-secondary/70 hover:bg-secondary/80 transition-colors rounded-md"
            >
              More info ⇢
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
