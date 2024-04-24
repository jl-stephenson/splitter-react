const InputBox = ({ id, text, handleInput }) => {
  
  return (
    <div className="input-box">
      <label htmlFor={id} className="block">
        {text}
      </label>
      <input type="text" id={id} className="border-2" onChange={handleInput} />
    </div>
  );
};

export default InputBox;
