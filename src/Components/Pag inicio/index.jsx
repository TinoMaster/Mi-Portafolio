import React, { useContext } from "react";
import { Hero } from "./Hero";
import { AboutMe } from "./About me";

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
        <Hero states={states} />
      </div>

      <div
        id="2"
        className="w-full relative px-4 pb-10 max-w-720p m-auto overflow-hidden"
      >
        <AboutMe darkMode={darkMode} />
      </div>

      <div
        id="3"
        className={`w-full relative p-4 py-10 lg:py-20 m-auto overflow-hidden ${
          !darkMode ? "bg-gradient-to-b from-primary/5 via-slate-700/10 to-primary/5" : "bg-gradient-to-b from-primary/10 via-slate-700/20 to-primary/10"
        }`}
      >
        <Projects darkMode={darkMode} />
      </div>

      <div
        id="4"
        className="w-full relative p-4 max-w-720p m-auto overflow-hidden py-10"
      >
        <Contacts darkMode={darkMode} />
      </div>
    </div>
  );
};
