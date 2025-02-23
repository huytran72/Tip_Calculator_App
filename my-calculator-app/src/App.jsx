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
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  return (
    <div>
      <BillInput bill={bill} onsetBill={setBill} />
      <SelectPercentage percentage1={percentage1} onSelect={setPercentage1}>
        {" "}
        How did you like the services?{" "}
      </SelectPercentage>
      <SelectPercentage percentage2={percentage2}>
        How did your friend like the services?
      </SelectPercentage>
      <Output bill={bill} />
      <Reset />
    </div>
  );
}

function BillInput({ bill, onsetBill }) {
  return (
    <div>
      <label> How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onsetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill }) {
  return <h3>You pay X (${bill} + $B tip)</h3>;
}

function Reset() {
  return <button>Reset</button>;
}

export default App;
