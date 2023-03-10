import React from "react";
import vectors from "../../svgs";

export const Resume = () => {
  return (
    <div className="w-full px-2 py-10">
      <div className="flex w-full lg:w-1/2 m-auto justify-center items-center relative">
        <div className="w-1/2 lg:w-2/3 flex justify-center ">
          <img src={vectors.vector6} alt="" className="lg:w-2/3"/>
        </div>
        <div className="w-1/2 lg:w-1/3">
          <p className="text-xs lg:text-base">
            Bienvenido a mi portafolio web. Soy un desarrollador con experiencia
            en las tecnologías de Stack MERN, así como en HTML, CSS, JavaScript
            y GitHub. He trabajado en diversos proyectos web utilizando estas
            tecnologías y me apasiona seguir aprendiendo y creciendo en este
            campo. En mi portafolio podrás encontrar una muestra de mi trabajo y
            mi experiencia. Si estás buscando un desarrollador web con
            habilidades en las tecnologías mencionadas, no dudes en ponerte en
            contacto conmigo.
          </p>
        </div>
      </div>
    </div>
  );
};
