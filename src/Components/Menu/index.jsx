import React, { useContext } from "react";
import { ButtonModeDark } from "./ButtonModeDark";
import { Links } from "./Links";
import { AiOutlineMenu } from "react-icons/ai";
import AppContext from "../../Contexts/appContext";

export const Menu = ({switchMenu }) => {
  const { states } = useContext(AppContext);
  return (
    <nav
      className={`flex justify-between items-center w-full py-3 fixed z-30 ${
        states.darkMode
          ? "bg-gradient-to-b from-lightMode to-lightMode/80"
          : "bg-gradient-to-b from-darkMode to-darkMode/80"
      }`}
    >
      {/*  */}
      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white shadow-md shadow-primary/30 rounded-full ml-5"></div>
      <div className="flex">
        <ButtonModeDark
          darkMode={states.darkMode}
          setDarkMode={states.setDarkMode}
        />
        <Links darkMode={states.darkMode} />
        <div onClick={switchMenu} className="md:hidden shadow shadow-primary/40 p-2 mx-4 rounded-full">
          <AiOutlineMenu className="text-3xl" />
        </div>
      </div>
    </nav>
  );
};
