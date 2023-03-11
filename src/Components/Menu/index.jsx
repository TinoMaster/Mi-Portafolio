import React, { useContext } from "react";
import { ButtonModeDark } from "./ButtonModeDark";
import { Links } from "./Links";
import { AiOutlineMenu } from "react-icons/ai";
import AppContext from "../../Contexts/appContext";

export const Menu = () => {
  const { states } = useContext(AppContext);
  return (
    <nav className={`flex justify-between items-center w-full py-2  shadow-md shadow-primary/5 sticky top-0 z-30 ${states.darkMode ?"":"bg-black/70"}`}>
      {/*  */}
      <div className="w-10 h-10 lg:w-14 lg:h-14 bg-white shadow-md shadow-primary/30 rounded-full ml-4"></div>
      <div className="flex">
        <ButtonModeDark
          darkMode={states.darkMode}
          setDarkMode={states.setDarkMode}
        />
        <Links darkMode={states.darkMode} />
        <div className="md:hidden shadow-sm shadow-black/40 p-2 mr-2 rounded-full">
          <AiOutlineMenu className="text-xl" />
        </div>
      </div>
    </nav>
  );
};
