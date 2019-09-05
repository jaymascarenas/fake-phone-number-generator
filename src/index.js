import React from "react";
import ReactDOM from "react-dom";
import GeneratePhone from "./GeneratePhone";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <GeneratePhone />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
