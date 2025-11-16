import "./App.css";

function InputContainer({ setInput, inputValue }) {
  return (
    <>
      <div className="mainInputContainer">
        <div className="labelContainer">
          <span>From</span>
          <span>Currency type</span>
        </div>
        <div className="inputDropdownContainer">
          <input
            type="text"
            readOnly
            className="inputContainer"
            value={inputValue}
          />
          <select
            onChange={(e) => setInput(e.target.value)}
            className="selectContainer"
          >
            <option value="inr">INR</option>
            <option value="usd">USD</option>
            <option value="jpy">JPY</option>
            <option value="slr">SLR</option>
            <option value="plr">PLR</option>
            <option value="aud">AUD</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default InputContainer;
