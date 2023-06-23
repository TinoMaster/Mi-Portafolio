import {
  faEnvelopeOpenText,
  faExclamation,
  faFolderBlank,
  faHome,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
    icon: faHome,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: faFolderBlank,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faEnvelopeOpenText,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: faPenFancy,
  },
  {
    name: "About Me",
    path: "/aboutme",
    icon: faExclamation,
  },
];

export const Links = ({ darkMode }) => {
  return (
    <div className="md:flex font-serif relative hidden pr-2">
      {links?.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? darkMode
                ? "flex items-baseline font-semibold mr-4 text-primary "
                : "flex items-baseline font-semibold mr-4 text-primary "
              : darkMode
              ? "flex items-baseline font-semibold mr-4 hover:text-primary/60 transition-all"
              : "flex items-baseline font-semibold mr-4 hover:text-slate-50 text-slate-300 transition-all"
          }
          to={link.path}
        >
          <FontAwesomeIcon className="text-sm mr-1" icon={link.icon} />{" "}
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};
