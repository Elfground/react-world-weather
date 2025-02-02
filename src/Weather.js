import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date (response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            feels_like: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
        });
    }

    if (weatherData.ready) {
    return (
         <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li><FormattedDate date={weatherData.date} /></li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src={weatherData.icon} alt={weatherData.description} className="float-left" />
                <div className="float-left">
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Feels like: {Math.round(weatherData.feels_like)}</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            
            </div>
        </div>
    </div>
    );
} else {
    const apiKey = "2f78437a500ef24fc3e9894233eftb0o";
    const unit ="metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse)
    return "Loading ...";
}
}
