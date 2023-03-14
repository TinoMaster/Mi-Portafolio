import React, { useContext } from "react";
import { ButtonModeDark } from "./ButtonModeDark";
import { Links } from "./Links";
import { AiOutlineMenu } from "react-icons/ai";
import AppContext from "../../Contexts/appContext";

export const Menu = () => {
  const { states } = useContext(AppContext);
  return (
    <nav className={`flex justify-between items-center w-full py-3  shadow-md  sticky top-0 z-30 ${states.darkMode ?"bg-lightMode/90":"bg-darkMode"}`}>
      {/*  */}
      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-md shadow-primary/30 rounded-full ml-5"></div>
      <div className="flex">
        <ButtonModeDark
          darkMode={states.darkMode}
          setDarkMode={states.setDarkMode}
        />
        <Links darkMode={states.darkMode} />
        <div className="md:hidden shadow-sm shadow-black/40 p-2 mr-4 rounded-full">
          <AiOutlineMenu className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};
