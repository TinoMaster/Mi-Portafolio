import {
  faExclamation,
  faFolderBlank,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

export const Links = ({ darkMode }) => {
  return (
    <div className="flex font-serif relative">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? darkMode
              ? "flex items-baseline mr-4 text-slate-900"
              : "flex items-baseline mr-4 text-slate-50 "
            : darkMode
            ? "flex items-baseline mr-4 hover:text-slate-900"
            : "flex items-baseline mr-4 hover:text-slate-50 text-slate-300"
        }
        to={"/"}
      >
        <FontAwesomeIcon className="text-sm mr-1" icon={faHome} /> Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? darkMode
              ? "flex items-baseline mr-4 text-slate-900"
              : "flex items-baseline mr-4 text-slate-50"
            : darkMode
            ? "flex items-baseline mr-4 hover:text-slate-900"
            : "flex items-baseline mr-4 hover:text-slate-50 text-slate-300"
        }
        to={"/projects"}
      >
        <FontAwesomeIcon className="text-sm mr-1" icon={faFolderBlank} />{" "}
        Proyectos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? darkMode
              ? "flex items-baseline mr-4 text-slate-900"
              : "flex items-baseline mr-4 text-slate-50"
            : darkMode
            ? "flex items-baseline mr-4 hover:text-slate-900"
            : "flex items-baseline mr-4 hover:text-slate-50 text-slate-300"
        }
        to={"/acerca"}
      >
        <FontAwesomeIcon className="text-sm mr-1" icon={faExclamation} /> Acerca
        de
      </NavLink>
    </div>
  );
};
