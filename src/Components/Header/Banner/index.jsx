import React from "react";
import { BoxImage } from "./BoxImage";
import { Escrito } from "./Escrito";

export const Banner = () => {
  return (
    <section className="flex w-full">
      {/* Description */}
      <Escrito />
      {/*BOX IMG */}
      <BoxImage />
    </section>
  );
};
