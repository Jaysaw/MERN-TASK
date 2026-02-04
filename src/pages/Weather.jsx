import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      setError("");
      setWeather(null);

      // 1️⃣ Convert city → latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2️⃣ Get weather using lat & lon
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      );

      const weatherData = await weatherRes.json();

      setWeather({
        name,
        country,
        current: weatherData.current_weather,
        daily: weatherData.daily,
      });
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="weather-container">
      <h2>🌤️ Weather Forecast</h2>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h3>
            {weather.name}, {weather.country}
          </h3>

          <p>🌡️ Temperature: {weather.current.temperature}°C</p>
          <p>💨 Wind Speed: {weather.current.windspeed} km/h</p>

          <h4>📅 5-Day Forecast</h4>
          <div className="forecast">
            {weather.daily.time.map((day, index) => (
              <div key={index} className="forecast-day">
                <p>{day}</p>
                <p>⬆ {weather.daily.temperature_2m_max[index]}°C</p>
                <p>⬇ {weather.daily.temperature_2m_min[index]}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
