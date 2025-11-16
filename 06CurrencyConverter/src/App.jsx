import "./App.css";
import { useState } from "react";
import InputContainer from "./InputContainer";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  let inputValue=0
  return (
    <>
      <div className="mainContainer">
        <InputContainer setInput={setFrom} input={from} inputValue={inputValue}/>
        <div className="swapButton">Swap</div>
        <InputContainer setInput={setTo} input={to} inputValue={inputValue}/>
        <button className="convertButton">
          Convert {from} to {to}
        </button>
      </div>
    </>
  );
}

export default App;
