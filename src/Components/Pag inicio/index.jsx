import React, { useContext } from "react";
import { Banner } from "./Banner";
import { Resume } from "./Resume";

import AppContext from "../../Contexts/appContext";
import { Projects } from "./Projects";

export const PagInicio = () => {
  const { states } = useContext(AppContext);
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col w-full  m-auto h-[100vh]">
        <Banner states={states} />
      </div>

      <div className="w-full overflow-hidden bg-zinc-900 py-10 lg:py-20">
        <Resume />
      </div>

      <div className="lg:py-20 py-10">
        <Projects darkMode={states.darkMode} />
      </div>
    </div>
  );
};
