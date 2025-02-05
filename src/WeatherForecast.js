import React from "react";
import WeatherForecastIcon from "./WeatherForecastIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherForecastIcon code="clear-sky-day" />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );

}