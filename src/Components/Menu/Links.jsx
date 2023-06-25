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

const linksScroll = [
  {
    name: "Home",
    path: "/",
    icon: faHome,
    section: "1",
  },
  {
    name: "About Me",
    path: "/",
    icon: faExclamation,
    section: "2",
  },
  {
    name: "Projects",
    path: "/",
    icon: faFolderBlank,
    section: "3",
  },
  {
    name: "Contact",
    path: "/",
    icon: faEnvelopeOpenText,
    section: "4",
  },
];

const linksNav = [
  {
    name: "Blog",
    path: "/blog",
    icon: faPenFancy,
  },
];

export const Links = ({ darkMode }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:flex font-serif relative hidden pr-2">
      {linksScroll?.map((link) => (
        <a
          href="seccion1"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(link.section);
          }}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? darkMode
                  ? "flex items-baseline font-semibold mr-4"
                  : "flex items-baseline font-semibold mr-4"
                : darkMode
                ? "flex items-baseline font-semibold mr-4 hover:text-primary/60 transition-all"
                : "flex items-baseline font-semibold mr-4 hover:text-slate-50 text-slate-300 transition-all"
            }
            to={link.path}
          >
            <FontAwesomeIcon className="text-sm mr-1" icon={link.icon} />{" "}
            {link.name}
          </NavLink>
        </a>
      ))}
      {linksNav?.map((link) => (
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
      {/* <ul>
        <li>
          <a
            href="seccion1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("seccion1");
            }}
          >
            Sección 1
          </a>
        </li>
      </ul> */}
    </div>
  );
};
