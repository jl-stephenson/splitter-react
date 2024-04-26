import { useEffect, useState } from "react";
import "./style.css";

import InputBox from "../InputBox";
import CalcResult from "../CalcResult";
import TipButton from "../TipButton";

const Calculator = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [perPersonTotal, setPerPersonTotal] = useState(0);
  const [tipBtnStatus, setTipBtnStatus] = useState(false);

  function handleBillInput(event) {
    setBillAmount(event.target.value);
  }
  function handlePeopleInput(event) {
    setPeopleNum(event.target.value);
  }

  function handleReset() {
    setPeopleNum(0);
    setTipTotal(0);
    setPerPersonTotal(0);
    setBillAmount(0);
    setTipBtnStatus(false);
  }

  useEffect(() => {
    if (peopleNum > 0 && billAmount > 0) {
      let calculation1 = (billAmount * tipPercentage) / peopleNum;
      let calculation2 = billAmount / peopleNum + calculation1;
      setTipTotal(calculation1);
      setPerPersonTotal(calculation2);
      setTipBtnStatus(true);
    }
  }, [tipPercentage]);

  return (
    <div className="grid-container w-full h-full grid grid-cols-2 items-center px-6">
      <div className="left-side w-full h-5/6 flex flex-col justify-around">
        <InputBox name="bill" text="Bill" handleInput={handleBillInput} />
        <div>
          <p>Select Tip %</p>
          <div className="tip-grid">
            <TipButton
              number={5}
              status={tipBtnStatus}
              handleClick={() => {
                setTipPercentage(0.05);
              }}
            />
            <TipButton
              number={10}
              status={tipBtnStatus}
              handleClick={() => {
                setTipPercentage(0.1);
              }}
            />
            <TipButton
              number={15}
              status={tipBtnStatus}
              handleClick={() => {
                setTipPercentage(0.15);
              }}
            />
            <TipButton
              number={25}
              status={tipBtnStatus}
              handleClick={() => {
                setTipPercentage(0.25);
              }}
            />
            <TipButton
              number={50}
              status={tipBtnStatus}
              handleClick={() => {
                setTipPercentage(0.5);
              }}
            />
            <TipButton number="Custom" />
          </div>
        </div>
        <InputBox
          name="people"
          text="Number of People"
          handleInput={handlePeopleInput}
        />
      </div>
      <div className="right-side bg-teal-900 rounded-2xl h-5/6">
        <section className="result-box">
          <CalcResult
            id="box1"
            category="Tip Amount"
            total={tipTotal.toFixed(2)}
          />
          <CalcResult
            id="box2"
            category="Total"
            total={perPersonTotal.toFixed(2)}
          />
          <button className="reset-button bg-emerald-200" onClick={handleReset}>
            RESET
          </button>
        </section>
      </div>
    </div>
  );
};

export default Calculator;
