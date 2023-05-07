import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      country: response.data.country,
      date: new Date(response.data.time * 1000),
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
              <p className="current-date-time">
                <FormattedDate date={weatherData.date} />
              </p>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = `485cb8bac1atfac9f3b46bfdodfc3a40`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading...`;
  }
}
