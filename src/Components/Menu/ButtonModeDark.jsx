import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ButtonModeDark = ({ darkMode, changeDarkMode }) => (
  <div className="flex mx-4">
    <div className="Icono"></div>
    <div
      onClick={changeDarkMode}
      className="flex justify-center items-center hover:cursor-pointer"
    >
      {!darkMode ? (
        <div className="flex items-center w-8 h-4 rounded-full bg-slate-300 relative">
          <div className="flex justify-center items-center w-5 h-5 bg-white border-2 rounded-full translate-x-0 transition-all ease-linear">
            <FontAwesomeIcon className="text-primary" icon={faMoon} />
          </div>
        </div>
      ) : (
        <div className="flex items-center w-8 h-4 rounded-full bg-slate-300 relative">
          <div className="flex justify-center items-center w-5 h-5 bg-white border-2 rounded-full translate-x-3/4 transition-all ease-linear">
            <FontAwesomeIcon className="text-yellow-400" icon={faSun} />
          </div>
        </div>
      )}
    </div>
  </div>
);
