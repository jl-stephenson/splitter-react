const InputBox = ({ id, text }) => {
  return (
    <div className="input-box">
      <label htmlFor={id} className="block">
        {text}
      </label>
      <input type="text" id={id} className="border-2" />
    </div>
  );
};

export default InputBox;
