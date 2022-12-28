/* import { useMachine } from "@xstate/react"; */
import React from "react";
import { Container } from "../Container Page";
/* import bookingMachine from "../../Machines/bookingMachine"; */
import { Menu } from "../Menu";

export const BaseLayout = () => {
  /* const [state, send] = useMachine(bookingMachine);
  console.log("Nuestra maquina", state); */
  return (
    <div className="w-full h-full">
      <Menu />
      <Container />
    </div>
  );
};
