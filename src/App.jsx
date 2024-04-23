import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResultBox from "./components/ResultBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-teal-100 w-screen h-screen">
      <section className="flex-container py-44">
        <div className="title w-60 mx-auto text-center">
          <h1 className="tracking-wider text-slate-600 text-2xl">SPLI</h1>
          <h1 className="tracking-wide text-slate-600 text-2xl">TTER</h1>
        </div>
        <div className="calc-box w-3/4 h-96 mx-auto my-8 bg-white rounded-3xl">
          <div className="grid-container w-full h-80 grid grid-cols-2">
            <div className="left-side w-full h-full">
              <div className="input-box"></div>
              <div className="tipbuttons"></div>
              <div className="input-box"></div>
            </div>
            <div className="right-side bg-emerald-800 rounded-2xl">
              <ResultBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
