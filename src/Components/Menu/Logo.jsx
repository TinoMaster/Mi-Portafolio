import React from "react";
import { mi_logo_trans } from "../../images";

export const Logo = () => {
  return (
    <div className="w-12 h-12 relative bg-gradient-to-b from-primary/60 to-secondary/60 shadow-md shadow-primary/30 rounded-full ml-5 lg:ml-10 border border-secondary overflow-hidden">
      <img
        src={mi_logo_trans}
        alt="mi logo"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
