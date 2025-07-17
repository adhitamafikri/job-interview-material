import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EffectExecutionSequence } from "./scenarios/EffectExecutionSequence";
import React from "react";

function App() {
  React.useEffect(() => {
    console.log("App component mounted");

    return () => {
      console.log("App component unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">React Effect Concepts</p>

      {/* Scenarios */}
      <EffectExecutionSequence />
      {/* End of Scenarios */}
    </>
  );
}

export default App;
