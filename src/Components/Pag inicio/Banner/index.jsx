import React from "react";
import { BannerRight } from "./BannerRight";
import { BannerLeft } from "./BannerLeft";

export const Banner = () => {
  return (
    <section className="flex flex-wrap min-h-[400px] w-full">
      {/* Description */}
      <BannerLeft />
      <BannerRight />
      {/*BOX IMG */}
    </section>
  );
};
