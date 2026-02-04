import { useEffect, useState } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return `${minutes.toString().padStart(2, "0")}:
            ${seconds.toString().padStart(2, "0")}:
            ${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-page">
      <div className="stopwatch-card">
        <h2>Stopwatch</h2>

        <div className="time-display">
          {formatTime()}
        </div>

        <div className="controls">
          <button onClick={() => setRunning(true)}>Start</button>
          <button onClick={() => setRunning(false)} className="pause">Pause</button>
          <button
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
            className="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
