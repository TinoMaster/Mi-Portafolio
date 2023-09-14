import React, { useContext } from "react";
import { Banner } from "./Banner";
import { Resume } from "./Resume";

import AppContext from "../../Contexts/appContext";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";

export const PagInicio = () => {
  const { states } = useContext(AppContext);

  const { darkMode } = states;
  return (
    <div className="w-full flex flex-col relative">
      {/* layout pag inicio */}
      <div id="1" className="flex flex-col pt-10 w-full m-auto h-[100vh]">
        <Banner states={states} />
      </div>

      <div
        id="2"
        className={`w-full overflow-hidden lg:py-20 py-10 ${
          !darkMode ? "bg-zinc-900" : "bg-white/80"
        } `}
      >
        <Resume darkMode={darkMode} />
      </div>

      <div id="3" className="lg:py-20 py-10">
        <Projects darkMode={darkMode} />
      </div>

      <div id="4" className="lg:py-20 py-10">
        <Contacts darkMode={darkMode} />
      </div>
    </div>
  );
};
