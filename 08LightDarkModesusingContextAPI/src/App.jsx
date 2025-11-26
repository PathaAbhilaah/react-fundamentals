import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import React, { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <h1 className="heading">Light and dark modes</h1>
        <ThemeBtn />
        <Card
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3A9Cb804Lgo0q9E1CBWz-FUZ3GGS-FDlBQ&s"
          title="Sample Card"
          description="This is a sample card component with image, title, and description."
        />
      </ThemeProvider>
    </>
  );
}

export default App;
