import React from "react";
import vectors from "../../svgs";
import { mi_foto2 } from "../../images";

export const Resume = () => {
  return (
    <div className="w-full relative">
      {/* <div className="flex w-full absolute">
        <div className="w-11/12 md:w-3/4">
          <img src={vectors.vector6} alt="" className="lg:w-2/3" />
        </div>
      </div> */}

      <div className="flex w-full text-slate-200 justify-end">
        {/* img */}
        <div className="flex w-full absolute">
          <div className="w-full h-[700px] bg-zinc-900  absolute rounded-md"></div>
          <div className="w-full h-[700px] overflow-hidden">
            <img
              src={mi_foto2}
              alt=""
              className="scale-90 -translate-y-7 -translate-x-24"
            />
          </div>
          <div className="w-full h-[700px] bg-gradient-to-r from-darkMode/90 to-darkMode absolute"></div>
        </div>
        {/* Escrito */}
        <div className="flex flex-col w-11/12 md:w-1/2 m-auto md:mr-10 h-[800px] z-10">
          <p className="w-full text-4xl font-serif text-end mr-5 text-primary py-10">
            About me
          </p>
          <p className="w-4/5 text-2xl sm:text-5xl md:text-4xl text-end font-serif py-6">
            Bienvenido a mi portafolio web.
          </p>
          <p className="w-full sm:text-2xl font-serif pt-10 z-20">
            Soy un desarrollador con poca experiencia en las tecnologías de
            Stack MERN, así como en HTML, CSS, JavaScript y GitHub. He trabajado
            en diversos proyectos web utilizando estas tecnologías y me apasiona
            seguir aprendiendo y creciendo en este campo. En mi portafolio
            podrás encontrar una muestra de mi trabajo y mi experiencia. Si
            estás buscando un desarrollador web con habilidades en las
            tecnologías mencionadas, no dudes en ponerte en contacto conmigo.
          </p>
          <div className="py-10">
            <button className="p-2 bg-white text-slate-600 rounded-md">Ver mas ⇢</button>
          </div>
        </div>
      </div>
    </div>
  );
};
