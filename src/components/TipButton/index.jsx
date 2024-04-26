const TipButton = ({ number, handleClick, status }) => {
  return <button onClick={handleClick} disabled={status} className="bg-teal-900 min-w-20 text-emerald-300" >{number}%</button>;
};

export default TipButton;
