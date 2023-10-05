import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseLayout } from "./Components/Layout/BaseLayout";
import AppContext from "./Contexts/appContext";
import "./index.css";

function App() {
  const { states } = useContext(AppContext);
  return (
    <main
      className={`w-screen h-screen overflow-hidden font-roboto font-semibold
        ${
          !states.darkMode
            ? "bg-darkMode text-slate-300"
            : "bg-lightMode text-slate-600"
        }`}
    >
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </main>
  );
}

export default App;
