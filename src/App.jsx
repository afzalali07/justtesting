
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  function calculate() {
    let h = height / 100;
    let result = weight / (h * h);
    setBmi(result.toFixed(2));
  }

  return (
    <div>
      <h2>BMI Calculator</h2>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br /><br />

      <button onClick={calculate}>Calculate BMI</button>

      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
}

export default App;
