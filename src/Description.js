import React from "react";

import "./Description.css";

export default function Description() {
  let weatherData = {
    city: "My city",
    date: "Monday 10:00",
    description: "few clouds",
    imgUrl: "https://openweathermap.org/img/wn/02d@2x.png",
    temperature: 25,
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Description">
      <div className="row">
        <div className="col-6 main">
          <ul>
            <li>
              <h1 id="city">{weatherData.city}</h1>
            </li>
            <li>
              Last updated: <span id="time">{weatherData.date}</span>
            </li>
            <li id="description">{weatherData.description}</li>
            <li>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                id="icon"
              />
            </li>
          </ul>
        </div>
        <div className="col-6 main">
          <ul>
            <li>
              <strong class="me-2" id="current-temperature">
                {weatherData.temperature}
              </strong>
              <span className="unit">
                <a className="activ" id="celsius" href="/">
                  °C
                </a>{" "}
                |{" "}
                <a id="fahrenheit" href="/">
                  °F
                </a>
              </span>
            </li>
            <li>
              <span id="temperature-max"></span>
              <span id="temperature-min"></span>
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
