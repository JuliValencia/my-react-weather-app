import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://julianavalencia.net/"
            target="_blank"
            rel="noreferrer"
          >
            Juliana Valencia{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/JuliValencia/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
