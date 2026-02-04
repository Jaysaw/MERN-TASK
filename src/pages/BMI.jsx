import { useState } from "react";
import "./BMI.css";

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;

    const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue < 24.9) setStatus("Normal");
    else if (bmiValue < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  const resetBMI = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <div className="bmi-page">
      <div className="bmi-card">
        <h2>BMI Calculator</h2>

        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <div className="btn-group">
          <button onClick={calculateBMI}>Calculate</button>
          <button className="reset" onClick={resetBMI}>Reset</button>
        </div>

        {bmi && (
          <div className="result">
            <h3>Your BMI: <span>{bmi}</span></h3>
            <p>Status: <strong>{status}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}
