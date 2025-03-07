import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1 className="headline"><span className="opaque">Weekly</span>Weather</h1>
      <Weather defaultCity="Falun" />
    <footer>This project was coded by <a href="https://github.com/Elfground" target="_blank" rel="noopener noreferrer">Monica Alvmarken</a> and is open-sourced on <a href="https://github.com/Elfground/react-world-weather" target="_blank" rel="noopener noreferrer">GitHub</a> and hosted on <a href="https://react-world-vaeder.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a></footer>
    </div>
    </div>
  );
}

export default App;
