import React, { useState, useEffect } from 'react'
import "./WeatherCard.css";

const WeatherCard = () => {

    const [search, setSearch] = useState("kanpur");
    const [tempInfo, setTempInfo] = useState({});
    const [weatherState, setWeatherState] = useState("")

    const changeValue = (e) => {
        setSearch(e.target.value);
    }

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=90c71378d132e1f47bdc5b17f613ef21`;

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            let sec = sunset;
            let date = new Date(sec * 1000);
            const timeStr = `${date.getHours()}:${date.getMinutes()}`;

            const myNewDetails = {
                temp, humidity, pressure, weathermood, name, speed, country, timeStr
            }
            setTempInfo(myNewDetails);

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, [])

    useEffect(() => {
        if (tempInfo.weathermood) {
            switch (tempInfo.weathermood) {
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-dust");
                    break;
                default:
                    break;
            }
        }
    }, [tempInfo.weathermood])

    return (
        <>
            <div className="container">
                <div className="search-cont">
                    <input type="text" className='textbox' placeholder='Search...' value={search} onChange={changeValue} />
                    <button className='btn'
                        onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
            <div className="sm-cont">
                <div className="weather-icon">
                    {/* <i className={"wi wi-day-sunny"}></i> */}
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="temp-box">
                    {tempInfo.temp} °C
                </div>
                <div className="place-box">
                    {tempInfo.weathermood}<br />
                    {tempInfo.name}, {tempInfo.country}
                </div>
                <div className="date-time-box">
                    {new Date().toLocaleDateString()} <br />
                    {new Date().toLocaleTimeString()}
                </div>
                <div className="extra-details">
                    <div className="box">
                        <i className={"wi wi-sunset"}></i>
                        <div className="side-text">
                            <p>Sunset</p>
                            <p>{tempInfo.timeStr}</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className={"wi wi-humidity"}></i>
                        <div className="side-text">
                            <p>Humidity</p>
                            <p>{tempInfo.humidity}</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className={"wi wi-barometer"}></i>
                        <div className="side-text">
                            <p>Pressure</p>
                            <p>{tempInfo.pressure}</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className={"wi wi-strong-wind"}></i>
                        <div className="side-text">
                            <p>Speed</p>
                            <p>{tempInfo.speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard