import React from "react";
import { Presentation } from "./Presentation";
import { Imagen } from "./imagen";

export const Banner = () => {
  return (
    <section className="flex flex-wrap relative flex-row-reverse w-full justify-center py-10 md:px-10">
      {/* Imagen  */}
      <Imagen />
      <Presentation />
    </section>
  );
};
