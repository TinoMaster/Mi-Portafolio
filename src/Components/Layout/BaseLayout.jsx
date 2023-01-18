/* import { useMachine } from "@xstate/react"; */
import React from "react";
import { Container } from "../Container Page";
import { Header } from "../Header";

export const BaseLayout = () => {
  
  return (
    <div className="w-full h-full m-auto relative p-1 overflow-auto">
      <Header />
      <Container />
    </div>
  );
};
