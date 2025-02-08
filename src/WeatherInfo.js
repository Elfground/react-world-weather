import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css"

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-4">
            <div className="col-6">
                <div className="clearfix">
                <WeatherIcon code={props.data.icon} alt={props.data.description} />
                <div className="float-left">
                <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.data.temperature)}</span>
            <span className="unit">°C</span>
            </div>
                </div>
                </div>
            </div>
            <div className="col-6">
                <ul className="conditions">
                    <li>Feels like: {Math.round(props.data.feels_like)}°C</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
            
            </div>
        </div>
        </div>
    );
}