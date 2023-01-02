/* import { useMachine } from "@xstate/react"; */
import React from "react";
import { Container } from "../Container Page";
import { Header } from "../Header";
/* import bookingMachine from "../../Machines/bookingMachine"; */

export const BaseLayout = () => {
  /* const [state, send] = useMachine(bookingMachine);
  console.log("Nuestra maquina", state); */
  return (
    <div className="w-full h-full max-w-1080p m-auto relative">
      <Header />
      <Container />
    </div>
  );
};
