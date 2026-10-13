
import { useState } from "react";

function App() {
  const [celcius, setCelcius] = useState("");
  const [fahren, setFahren] = useState("");

  function celToFah(value) {
    setCelcius(value);
    if (value !== "") {
      setFahren(String((Number(value) * 9 / 5) + 32));
    } else {
      setFahren("");
    }
  }

  function fahToCel(value) {
    setFahren(value);
    if (value !== "") {
      setCelcius(String((Number(value) - 32) * 5 / 9));
    } else {
      setCelcius("");
    }
  }

  return (
    <div>
      <input
        placeholder="Enter Celsius Value"
        value={celcius}
        onChange={e => celToFah(e.target.value)}
      />

      <input
        placeholder="Enter Fahrenheit Value"
        value={fahren}
        onChange={e => fahToCel(e.target.value)}
      />
    </div>
  );
}

export default App;
