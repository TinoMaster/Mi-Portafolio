import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonModeDark = ({ darkMode, setDarkMode }) => (
  <div className="flex mx-4">
    <div className="Icono"></div>
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="flex justify-center items-center hover:cursor-pointer"
    >
      {!darkMode ? (
        <div className="flex items-center w-9 h-6 md:w-9 md:h-5 rounded-full bg-slate-300 relative">
          <div className="flex justify-center items-center w-6 h-6 bg-white border-2 rounded-full translate-x-0 transition-all ease-linear">
            <FontAwesomeIcon className="text-primary" icon={faMoon} />
          </div>
        </div>
      ) : (
        <div className="flex items-center w-9 h-6 md:w-9 md:h-5 rounded-full bg-slate-300 relative">
          <div className="flex justify-center items-center w-6 h-6 bg-white border-2 rounded-full translate-x-3/4 transition-all ease-linear">
            <FontAwesomeIcon className="text-yellow-400" icon={faSun} />
          </div>
        </div>
      )}
    </div>
  </div>
);
