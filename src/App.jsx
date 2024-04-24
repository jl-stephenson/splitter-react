import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResultBox from "./components/ResultBox";
import InputBox from "./components/InputBox";
import TipGrid from "./components/TipGrid";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  function handleBillInput(event) {
    setBillAmount(event.target.value);
    console.log(billAmount);
  }
  function handlePeopleInput(event) {
    setPeopleNum(event.target.value);
    console.log(peopleNum);
  }

  return (
    <div className=" bg-teal-100 w-screen h-screen">
      <section className="flex-container py-44">
        <div className="title w-60 mx-auto text-center">
          <h1 className="tracking-wider text-slate-600 text-2xl">SPLI</h1>
          <h1 className="tracking-wide text-slate-600 text-2xl">TTER</h1>
        </div>
        <div className="calc-box w-3/4 h-96 mx-auto my-8 bg-white rounded-3xl">
          <div className="grid-container w-full h-full grid grid-cols-2 items-center px-6">
            <div className="left-side w-full h-5/6 flex flex-col justify-around">
              <InputBox name="bill" text="Bill" handleInput={handleBillInput} />
              <TipGrid />
              <InputBox name="people" text="Number of People" handleInput={handlePeopleInput} />
            </div>
            <div className="right-side bg-teal-900 rounded-2xl h-5/6">
              <ResultBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
