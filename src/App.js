import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./Components/Layout/BaseLayout";
import AppContext from "./Contexts/appContext";
import "./index.css";

function App() {
  const { states } = useContext(AppContext);
  return (
    <main
      className={`w-screen h-screen overflow-hidden font-roboto
        ${
          !states.darkMode
            ? "bg-darkMode text-slate-100"
            : "bg-lightMode text-slate-700"
        }`}
    >
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </main>
  );
}

export default App;
