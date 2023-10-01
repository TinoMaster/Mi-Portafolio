import React from "react";
import { mi_logo } from "../../images";

export const Logo = () => {
  return (
    <div className="w-12 h-12 relative bg-gradient-to-t from-primary/50 to-secondary/50 shadow-md shadow-primary/30 rounded-full ml-5 lg:ml-10 border border-primary p-1">
      <img src={mi_logo} alt="mi logo" className="w-full h-full object-cover" />
    </div>
  );
};
