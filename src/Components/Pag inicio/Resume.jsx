import React from "react";
import { mi_foto2 } from "../../images";
import { RiSuitcaseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <div className="w-full text-lg relative max-w-720p m-auto pt-5 rounded-md overflow-hidden font-serif">
      <div className="flex w-full text-slate-200 justify-end">
        {/* img */}
        <div className="flex w-full absolute">
          <div className="w-full h-full bg-zinc-900  absolute rounded-md"></div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={mi_foto2}
              alt=""
              className="scale-90 -translate-y-7 -translate-x-24 lg:-translate-x-20"
            />
          </div>
          <div className="w-full h-full bg-gradient-to-r from-zinc-900/90 to-zinc-900 absolute"></div>
        </div>
        {/* Escrito */}
        <div className="flex flex-col w-11/12 md:w-1/2 m-auto md:mr-10 h-full z-10">
          <p className="w-full text-3xl font-medium text-end mr-5 text-primary py-6 lg:py-10">
            About me
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
              className="py-2 px-4 bg-secondary/70 hover:bg-secondary/80 transition-colors text-slate-300 rounded-md"
            >
              More info ⇢
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
