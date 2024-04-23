const CalcResult = ({ category }) => {
  return (
    <div className="result-inline flex justify-between align-middle">
      <div className="result-text pl-3">
        <p className="text-emerald-200">{category}</p>
        <p className="text-emerald-200">
          <small>/ person</small>
        </p>
      </div>
      <h2 className="pr-3 text-3xl text-emerald-200">£0.00</h2>
    </div>
  );
};

export default CalcResult;
