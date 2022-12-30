import { createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const states = {
    darkMode,
    setDarkMode,
  };

  const funtions = {};

  const data = { states, funtions };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
