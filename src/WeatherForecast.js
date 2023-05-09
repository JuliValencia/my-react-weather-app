import React, { useState, useEffect, useInsertionEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "485cb8bac1atfac9f3b46bfdodfc3a40";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
