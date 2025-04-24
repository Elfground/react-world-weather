import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState (props.defaultCity);

    function getSeason() {
        const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
        if (month >= 2 && month <= 4) return "spring";
        if (month >= 5 && month <= 7) return "summer";
        if (month >= 8 && month <= 10) return "autumn";
        return "winter";
    }

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date (response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            temperature: response.data.temperature.current,
            feels_like: response.data.temperature.feels_like,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            coordinates: response.data.coordinates,
        });
    }

    function search() {
        const apiKey = "2f78437a500ef24fc3e9894233eftb0o";
        const unit ="metric";
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(handleResponse)
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }
    if (weatherData.ready) {
        const season = getSeason();
    return (
         <div className={`Weather ${season}`}>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-light w-100" />
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
    );
} else {
    search();
    return "Loading ...";
}
}
