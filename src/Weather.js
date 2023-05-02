import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      temperature: response.data.temperature.current,
      condition: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-6">
            <form>
              <input
                type="search"
                className="form-control"
                placeholder="Search City"
                autoComplete="off"
                autoFocus="on"
              />
              <input
                type="submit"
                value="🔍"
                className="btn btn-outline-primary"
              />
            </form>
          </div>

          <div className="col-md-6">
            <div className="location-date-time">
              <h1>
                <strong>{weatherData.city}</strong>,
                <strong> {weatherData.country} </strong>
              </h1>
              <p className="current-date-time">Sunday, April 2</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-3">
            <ul className="current-low-high">
              <li className="weather-forecast-temperature-low">
                L:<span>8</span>°
              </li>
              <li className="weather-forecast-temperature-high">
                H:<span>10</span>°
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="current-temperature">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
              <span>
                <img
                  src={weatherData.iconUrl}
                  className="weather-icon"
                  alt={weatherData.condition}
                />
              </span>
            </div>
            <div className="current-weather">{weatherData.condition}</div>
          </div>
          <div className="col-3">
            <ul className="current-humidity-wind">
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span>{Math.round(weatherData.wind)}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `485cb8bac1atfac9f3b46bfdodfc3a40`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading...`;
  }
}
