import React, { useContext } from "react";
import AppContext from "../../Contexts/appContext";
import { ButtonModeDark } from "./ButtonModeDark";
import { Links } from "./Links";

export const Menu = () => {
  const { states } = useContext(AppContext);
  return (
    <nav className="flex justify-end w-full py-4 px-10">
      <ButtonModeDark
        darkMode={states.darkMode}
        setDarkMode={states.setDarkMode}
      />
      <Links darkMode={states.darkMode} />
    </nav>
  );
};
