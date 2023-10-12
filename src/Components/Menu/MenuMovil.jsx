import React from "react";
import { Link } from "react-router-dom";
import { linksScroll } from "../../data/linksMenu";

export const MenuMovil = ({ darkMode, menuMovile, setMenuMovile }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center transition-all bg-gradient-to-b z-30 ${
        !darkMode
          ? "to-zinc-900 from-darkMode text-lightMode"
          : "to-slate-300 from-slate-100 text-darkMode"
      } fixed ${!menuMovile ? "-translate-x-full" : "translate-x-0"} z-20`}
    >
      <div className="p-4 flex flex-col justify-center items-center gap-8 text-3xl md:hidden font-siliguri font-normal">
        {linksScroll?.map((link) => (
          <Link
            key={link.name}
            href="seccion1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.section);
              setMenuMovile(false);
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
