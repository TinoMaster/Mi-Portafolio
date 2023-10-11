import { createContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(JSON.parse(window.localStorage.getItem("dark")));

  const changeDarkMode = () => {
    window.localStorage.setItem("dark", JSON.stringify(!darkMode))
    setDarkMode(prev => !prev);
  }

  const states = {
    darkMode,
  };

  const functions = { changeDarkMode };

  const data = { states, functions };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
