/* import { useMachine } from "@xstate/react"; */
import React, { useContext } from "react";
import AppContext from "../../Contexts/appContext";
import { Container } from "../Container Page";
import { Menu } from "../Menu";
import { Footer } from "../Footer";

export const BaseLayout = () => {
  const { states } = useContext(AppContext);
  return (
    <div
      className={`w-full h-full flex flex-col justify-between overflow-auto ${
        !states.darkMode ? "bg-darkMode" : ""
      } `}
    >
      <Menu />
      <Container />
      <Footer />
    </div>
  );
};
