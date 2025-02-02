import React from "react";

export default function WeatherIcon(props) {
  const codemapping = {
    "clear-sky-day": "clear-day",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partly-cloudy-day",
    "few-clouds-night": "partly-cloudy-night",
    "scattered-clouds-day": "partly-cloudy-day",
    "scattered-clouds-night": "partly-cloudy-night",
    "broken-clouds-day": "overcast",
    "broken-clouds-night": "overcast-night",
    "shower-rain-day": "drizzle",
    "shower-rain-night": "partly-cloudy-night-drizzle",
    "rain-day": "rain",
    "rain-night": "rain",
    "thunderstorm-day": "thunderstorms-rain",
    "thunderstorm-night": "thunderstorms-night-rain",
    "snow-day": "snow",
    "snow-night": "partly-cloudy-night-snow",
    "mist-day": "mist",
    "mist-night": "mist",
  };
  return (
    <div id="icon">
      <img
        className="float-left"
        src={`https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${
          codemapping[props.code]
        }.svg`}
        alt={props.alt}
      />
    </div>
  );
}
