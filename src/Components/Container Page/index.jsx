import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagInicio } from "../Pag inicio";
import { PagBlog } from "../Pag Blog";
import { Error404 } from "../Pag 404";

export const Container = () => {
  return (
    <section className="w-full relative">
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/blog" element={<PagBlog />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </section>
  );
};
