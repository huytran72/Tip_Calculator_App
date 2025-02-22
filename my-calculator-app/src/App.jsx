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
      <SelectPercentage />
      <SelectPercentage />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return;
  <div>
    <label>How much was the bill?</label>
  </div>;
}

function SelectPercentage() {}

function Output() {}

function Reset() {}

export default App;
