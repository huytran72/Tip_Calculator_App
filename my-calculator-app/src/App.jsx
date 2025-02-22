import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  return (
    <div>
      <BillInput />
    </div>
  );
}

function BillInput() {}

function SelectPercentage() {}

function Output() {}

function Reset() {}

export default App;
