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
          ? "w-screen h-screen bg-neutral-900 text-slate-200"
          : "w-screen h-screen text-slate-700"
      }
    >
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </main>
  );
}

export default App;
