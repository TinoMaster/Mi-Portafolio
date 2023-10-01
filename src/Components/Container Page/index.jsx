import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { PagInicio } from "../Pag inicio";
import { Error404 } from "../Pag 404";
import { linksScroll } from "../../utils/linksMenu";

export const Container = ({ menuMovile, setMenuMovile, darkMode }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="w-full relative">
      {/* Menu Desplazable */}
      <div
        className={`w-screen h-screen flex justify-center items-center transition-all bg-gradient-to-b ${
          !darkMode
            ? "to-slate-900 from-darkMode text-lightMode"
            : "to-slate-300 from-slate-100 text-darkMode"
        } fixed ${!menuMovile ? "-translate-x-full" : "translate-x-0"} z-20`}
      >
        <div className="p-4 flex flex-col justify-center items-center gap-8 text-3xl md:hidden font-normal">
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
      <Routes>
        <Route path="/" element={<PagInicio />} />
        {/* <Route path="/blog" element={<PagBlog />} /> */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </section>
  );
};
