import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./components/Calculator";


function App() {
  

  return (
    <div className=" bg-teal-100 w-screen h-screen">
      <section className="flex-container py-44">
        <div className="title w-60 mx-auto text-center">
          <h1 className="tracking-wider text-slate-600 text-2xl">SPLI</h1>
          <h1 className="tracking-wide text-slate-600 text-2xl">TTER</h1>
        </div>
        <div className="calc-box w-3/4 h-96 mx-auto my-8 bg-white rounded-3xl">
          <Calculator />
        </div>
      </section>
    </div>
  );
}

export default App;
