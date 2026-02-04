import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [value, setValue] = useState("");

  const press = (v) => setValue(value + v);
  const clear = () => setValue("");
  const del = () => setValue(value.slice(0, -1));

  const calculate = () => {
    try {
      setValue(Function(`return ${value}`)().toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calc-page">
      <div className="calc-card">
        <input className="calc-display" value={value} readOnly />

        <div className="calc-grid">
          <button className="ctrl" onClick={clear}>AC</button>
          <button className="ctrl" onClick={del}>DEL</button>
          <button className="op" onClick={() => press("/")}>÷</button>
          <button className="op" onClick={() => press("*")}>×</button>

          <button onClick={() => press("7")}>7</button>
          <button onClick={() => press("8")}>8</button>
          <button onClick={() => press("9")}>9</button>
          <button className="op" onClick={() => press("-")}>−</button>

          <button onClick={() => press("4")}>4</button>
          <button onClick={() => press("5")}>5</button>
          <button onClick={() => press("6")}>6</button>
          <button className="op" onClick={() => press("+")}>+</button>

          <button onClick={() => press("1")}>1</button>
          <button onClick={() => press("2")}>2</button>
          <button onClick={() => press("3")}>3</button>
          <button className="equal" onClick={calculate}>=</button>

          <button className="zero" onClick={() => press("0")}>0</button>
          <button onClick={() => press(".")}>.</button>
        </div>
      </div>
    </div>
  );
}
