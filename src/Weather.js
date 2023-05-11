import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
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
      feelsLike: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
    });
  }
  function search() {
    const apiKey = `485cb8bac1atfac9f3b46bfdodfc3a40`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                placeholder="Search City"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
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
        <hr />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return `Loading...`;
  }
}
