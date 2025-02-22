import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div>
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
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage() {
  return 
  <div>
    <select>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">Dissatisfied (5%)</option>
    </select>
  </div>

  )
}

function Output() {}

function Reset() {}

export default App;
