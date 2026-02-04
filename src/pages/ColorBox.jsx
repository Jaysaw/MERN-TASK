import React, { useState } from "react";
import "./ColorBox.css";

export default function ColorBox() {
  const [color, setColor] = useState("#3498db");

  const colors = [
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#1abc9c",
    "#e67e22",
    "#34495e"
  ];

  const randomColor = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    setColor(random);
  };

  return (
    <div className="color-page">
      <h2>🎨 Color Change Box</h2>

      <div
        className="color-box"
        style={{ backgroundColor: color }}
      ></div>

      <div className="buttons">
        {colors.map((c, index) => (
          <button
            key={index}
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          ></button>
        ))}
      </div>

      <button className="random-btn" onClick={randomColor}>
        Random Color
      </button>

      <p className="color-code">
        Selected Color: <span>{color}</span>
      </p>
    </div>
  );
}
