import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherForecastIcon code={props.data.condition.icon} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
            <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>
        </div>
        </div>
    );
}