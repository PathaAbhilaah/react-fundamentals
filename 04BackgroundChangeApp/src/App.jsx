import React, { useState } from "react";
import "./App.css";

function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];
  const [bgcolor, setBgcolor] = useState("white");

  React.useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]);
  return (
    <>
      <div className="container">
        <div className="colorContainer">
          {colors.map((color) => (
            <div
              key={color}
              className={`eachColor color-${color}`}
              onClick={() => setBgcolor(color)}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
