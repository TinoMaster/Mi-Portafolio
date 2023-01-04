import React from "react";
import { BannerRight } from "./BannerRight";
import { BannerLeft } from "./BannerLeft";

export const Banner = () => {
  return (
    <section className="flex flex-wrap w-full">
      {/* Description */}
      <BannerLeft />
      {/*BOX IMG */}
      <BannerRight />
    </section>
  );
};
