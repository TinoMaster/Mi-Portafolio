/* import { useMachine } from "@xstate/react"; */
import React, { useContext } from "react";
import AppContext from "../../Contexts/appContext";
import { Container } from "../Container Page";
import { Menu } from "../Menu";

export const BaseLayout = () => {
  const { states } = useContext(AppContext);
  return (
    <div
      className={`w-full h-full max-w-720p m-auto relative p-1 ${
        !states.darkMode ? "bg-darkMode" : ""
      } `}
    >
      <Menu />
      <Container />
    </div>
  );
};
