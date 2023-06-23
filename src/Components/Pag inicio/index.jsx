import React, { useContext } from "react";
import { Banner } from "./Banner";
import { Resume } from "./Resume";

import AppContext from "../../Contexts/appContext";
import { Projects } from "./Projects";

export const PagInicio = () => {
  const { states } = useContext(AppContext);
  const { darkMode } = states;
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col pt-10 w-full m-auto h-[100vh]">
        <Banner states={states} />
      </div>

      <div
        className={`w-full overflow-hidden ${
          !darkMode ? "bg-zinc-900" : "bg-zinc-100"
        } `}
      >
        <Resume darkMode={darkMode}/>
      </div>

      <div className="lg:py-20 py-10">
        <Projects darkMode={darkMode} />
      </div>
    </div>
  );
};
