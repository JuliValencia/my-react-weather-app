import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
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
            <WeatherTemperature celsius={props.data.temperature} />

            <span>
              <img
                src={props.data.iconUrl}
                className="weather-icon"
                alt={props.data.condition}
              />
            </span>
          </div>
          <div className="current-weather">{props.data.condition}</div>
        </div>
        <div className="col-3">
          <ul className="current-humidity-wind">
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
