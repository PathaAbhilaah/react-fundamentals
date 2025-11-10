import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    // Usestate considers all these operations as batch operations, it is going to consider only the last operation
    // Hence the counter will be incremented only by 1
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // To avoid this we can use the callback function of the setCounter method

    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const decrementCounter = () => {
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>React counter project</h1>
      <h3>Counter value {counter}</h3>

      <button onClick={addCounter}>Add counter {counter}</button>

      <button disabled={counter == 0} onClick={decrementCounter}>
        Decrement Counter {counter}
      </button>
    </>
  );
}

export default App;
