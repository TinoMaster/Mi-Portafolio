import React, { useContext } from "react";
import { Banner } from "./Banner";
import { Resume } from "./Resume";

import AppContext from "../../Contexts/appContext";

export const PagInicio = () => {
  const { states } = useContext(AppContext);
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col w-full  m-auto h-[100vh]">
        <Banner states={states} />
      </div>

      <div className="w-full overflow-hidden bg-darkMode">
        <Resume />
      </div>
    </div>
  );
};
