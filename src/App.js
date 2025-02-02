import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>World Weather App</h1>
      <Weather defaultCity="Falun" />
    <footer>This project was coded by Monica Alvmarken and is open-sourced on <a href="https://github.com/Elfground/react-world-weather" target="_blank" rel="noreferrer">GitHub</a></footer>
    </div>
    </div>
  );
}

export default App;
