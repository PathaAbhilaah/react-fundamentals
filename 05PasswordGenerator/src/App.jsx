import React, { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(4);
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false);
  const [isCharactersAllowed, setIsCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const [isCopied, setIsCopied]=useState(false)

  const generatePassword = useCallback(() => {
    let pass = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumbersAllowed) letters += "0123456789";
    if (isCharactersAllowed) letters += "!@#$%^&*(){}[]:/?";

    for (let i = 0; i < length; i++) {
      pass += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setPassword(pass);
  }, [isCharactersAllowed, isNumbersAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [length, isNumbersAllowed, isCharactersAllowed, generatePassword]);

  const handleCopy = () => {
    setIsCopied(true)
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    if(isCopied) document.querySelector('.copyButton').innerHTML='Copied'
  };

  return (
    <>
      <div className="container">
        <h3 className="passwordText">Password generator</h3>
        <div className="passwordContainer">
          <input
            type="text"
            readOnly
            className="password"
            value={password}
            ref={passwordRef}
          />
          <button className="copyButton" onClick={handleCopy}>
            Copy
          </button>
        </div>

        <div className="conditionsContainer">
          <input
            type="range"
            min={5}
            max={99}
            onChange={(e) => setLength(e.target.value)}
          />
          <p>length: {length}</p>

          <input
            type="checkbox"
            defaultChecked={isNumbersAllowed}
            onChange={(e) => setIsNumbersAllowed(e.target.checked)}
          />
          <p>Numbers</p>

          <input
            type="checkbox"
            defaultChecked={isCharactersAllowed}
            onChange={(e) => setIsCharactersAllowed(e.target.checked)}
          />
          <p>Characters</p>
        </div>
      </div>
    </>
  );
}

export default App;
