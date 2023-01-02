import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagAcerca } from "../Pag acerca";
import { PagInicio } from "../Pag inicio";
import { PagProjects } from "../Pag projects";

export const Container = () => {
  return (
    <section className="bg-neutral-800">
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/acerca" element={<PagAcerca />} />
        <Route path="/projects" element={<PagProjects />} />
      </Routes>
    </section>
  );
};
