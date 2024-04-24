import TipButton from "../TipButton";
import "./style.css";

const TipGrid = () => {
  return (
    <div>
      <p>Select Tip %</p>
      <div className="tip-grid">
        <TipButton number={5} />
        <TipButton number={10} />
        <TipButton number={15} />
        <TipButton number={25} />
        <TipButton number={50} />
        <TipButton number="Custom" />
      </div>
    </div>
  );
};

export default TipGrid;
