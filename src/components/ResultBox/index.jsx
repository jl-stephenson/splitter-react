import CalcResult from "../CalcResult";
import "./style.css";

const ResultBox = () => {
  return (
    <section className="result-box">
      <CalcResult id="box1" category="Tip Amount" />
      <CalcResult id="box2" category="Total" />
      <button className="reset-button bg-emerald-200">RESET</button>
    </section>
  );
};

export default ResultBox;
