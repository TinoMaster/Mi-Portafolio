import React, { useContext } from "react";
import { ButtonModeDark } from "./ButtonModeDark";
import { Links } from "./Links";
import AppContext from "../../Contexts/appContext";
import { Logo } from "./Logo";
import { BtnMenuMovil } from "./BtnMenuMovil";

export const Menu = ({ switchMenu }) => {
  const { states, functions } = useContext(AppContext);
  return (
    <nav
      className={`flex justify-between items-center w-full py-3 fixed z-40 bg-gradient-to-b ${
        states.darkMode
          ? "from-lightMode to-lightMode/80"
          : "from-darkMode to-darkMode/80"
      }`}
    >
      <Logo />
      <div className="flex">
        <ButtonModeDark
          darkMode={states.darkMode}
          changeDarkMode={functions.changeDarkMode}
        />
        <Links darkMode={states.darkMode} />
        <BtnMenuMovil switchMenu={switchMenu} />
      </div>
    </nav>
  );
};
