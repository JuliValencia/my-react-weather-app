import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ];
    return days[day];
  }
  return (
    <div>
      <div className="weather-forecast-date">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition}
        width="45"
      />
      <div className="weather-forecast-temperatures">
        <div className="weather-forecast-temperature-low">
          {" "}
          L:{Math.round(props.data.temperature.minimum)}°{" "}
        </div>
        <div className="weather-forecast-temperature-high">
          H:{Math.round(props.data.temperature.maximum)}°
        </div>
      </div>
    </div>
  );
}
