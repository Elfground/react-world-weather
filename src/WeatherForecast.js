import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]); 
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index > 0 && index < 6) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    } else {
                        return null;
                    }
                    })}
                </div>
            </div>
        );

} else {
    let apiKey = "2f78437a500ef24fc3e9894233eftb0o";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}