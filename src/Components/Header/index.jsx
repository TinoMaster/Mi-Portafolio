import React, { useContext } from "react";
import AppContext from "../../Contexts/appContext";
import { Menu } from "./Menu";

export const Header = () => {
  const {states}=useContext(AppContext)
  return (
    <header className={states.darkMode ?"w-full sticky top-0 z-30 bg-lightMode transition-colors delay-150":"w-full sticky top-0 z-30 bg-darkMode transition-colors delay-150"}>
      <Menu states={states}/>
    </header>
  );
};
