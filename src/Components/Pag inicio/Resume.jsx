import React from "react";
import vectors from "../../svgs";
import { mi_foto2 } from "../../images";

export const Resume = () => {
  return (
    <div className="w-full px-2  relative min-h-[1020px]">
      {/* <div className="flex w-full absolute">
        <div className="w-11/12 md:w-3/4">
          <img src={vectors.vector6} alt="" className="lg:w-2/3" />
        </div>
      </div> */}

      <div className="flex justify-end w-full">
        {/* img */}
        <div className="flex w-full absolute">
          <div className="w-full md:w-1/2 h-[800px] bg-zinc-800  absolute rounded-md"></div>
          <div className="w-full md:w-1/2 h-[800px] overflow-hidden">
            <img
              src={mi_foto2}
              alt=""
              className="scale-90 -translate-y-7 -translate-x-16"
            />
          </div>
          <div className="w-full md:w-1/2 h-[800px] bg-gradient-to-r from-darkMode/90 to-darkMode absolute"></div>
        </div>
        {/* Escrito */}
        <p className="w-2/3 text-xl pt-10 z-20">
          Bienvenido a mi portafolio web. Soy un desarrollador con experiencia
          en las tecnologías de Stack MERN, así como en HTML, CSS, JavaScript y
          GitHub. He trabajado en diversos proyectos web utilizando estas
          tecnologías y me apasiona seguir aprendiendo y creciendo en este
          campo. En mi portafolio podrás encontrar una muestra de mi trabajo y
          mi experiencia. Si estás buscando un desarrollador web con habilidades
          en las tecnologías mencionadas, no dudes en ponerte en contacto
          conmigo.
        </p>
      </div>
    </div>
  );
};
