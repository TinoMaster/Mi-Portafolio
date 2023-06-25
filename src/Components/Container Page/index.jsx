import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagInicio } from "../Pag inicio";
import { PagBlog } from "../Pag Blog";

export const Container = () => {
  return (
    <section className="w-full h-full m-auto overflow-auto relative">
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/blog" element={<PagBlog />} />
      </Routes>
    </section>
  );
};
