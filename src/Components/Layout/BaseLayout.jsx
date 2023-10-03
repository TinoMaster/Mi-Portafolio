/* import { useMachine } from "@xstate/react"; */
import React, { useContext, useState } from "react";
import AppContext from "../../Contexts/appContext";
import { Container } from "../Container Page";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

export const BaseLayout = () => {
  const [menuMovile, setMenuMovile] = useState(false);
  const { states } = useContext(AppContext);

  const switchMenu = () => {
    setMenuMovile(!menuMovile);
  };
  return (
    <div
      className={`w-full h-full flex flex-col justify-between overflow-auto ${
        !states.darkMode ? "bg-darkMode" : ""
      } `}
    >
      <Menu switchMenu={switchMenu} />
      <Container
        menuMovile={menuMovile}
        setMenuMovile={setMenuMovile}
        darkMode={states.darkMode}
      />
      <div className="bg-primary/70">
        <Footer />
      </div>
    </div>
  );
};
