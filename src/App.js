import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./Components/Layout/BaseLayout";
import AppContext from "./Contexts/appContext";
import "./index.css";

function App() {
  const { states } = useContext(AppContext);
  return (
    <main
      className={
        !states.darkMode
          ? "w-screen h-screen bg-darkMode text-slate-100 transition-colors delay-150"
          : "w-screen h-screen bg-lightMode text-slate-700 transition-colors delay-150"
      }
    >
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </main>
  );
}

export default App;
