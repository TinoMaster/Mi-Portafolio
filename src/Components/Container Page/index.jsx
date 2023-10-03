import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagInicio } from "../Pag inicio";
import { Error404 } from "../Pag 404";
import { MenuMovil } from "../Menu/MenuMovil";

export const Container = ({ menuMovile, setMenuMovile, darkMode }) => {
  return (
    <section className="w-full relative">
      {/* Menu Desplazable */}
      <MenuMovil
        darkMode={darkMode}
        menuMovile={menuMovile}
        setMenuMovile={setMenuMovile}
      />
      <Routes>
        <Route path="/" element={<PagInicio />} />
        {/* <Route path="/blog" element={<PagBlog />} /> */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </section>
  );
};
