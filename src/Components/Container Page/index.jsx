import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagAcerca } from "../Pag acerca";
import { PagInicio } from "../Pag inicio";
import { PagProjects } from "../Pag projects";

export const Container = () => {
  return (
    <section className="w-full h-full m-auto overflow-hidden relative">
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/acerca" element={<PagAcerca />} />
        <Route path="/projects" element={<PagProjects />} />
      </Routes>
    </section>
  );
};
