import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherForecastDay(props) {
    return (
        <div>
        <div className="WeatherForecast-day">{props.data.time}</div>
        <WeatherForecastIcon code={props.data.condition.icon} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
            <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>
        </div>
        </div>
    );
}