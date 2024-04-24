import CalcResult from "../CalcResult";
import "./style.css";

const ResultBox = () => {
  return (
    <section className="result-box">
      <CalcResult id="box1" category="Tip Amount" total={0.00} />
      <CalcResult id="box2" category="Total" total={0.00} />
      <button className="reset-button bg-emerald-200">RESET</button>
    </section>
  );
};

export default ResultBox;
