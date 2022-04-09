import React from 'react'
import "./WeatherCard.css";

const WeatherCard = () => {
    return (
        <>
            <div className="container">
                <div className="search-cont">
                    <input type="text" className='textbox' />
                    <button className='btn'>Search</button>
                </div>
            </div>
            <div className="sm-cont">
                <div className="one-box">
                    <img src="" alt="" />
                    img
                </div>
                <div className="two-box">
                    32423
                </div>
                <div className="two-box">
                    name
                </div>
                <div className="three-box">
                    name
                </div>
                <div className="four-box">
                    <div className="box">Time</div>
                    <div className="box">Humidity</div>
                    <div className="box">Pressure</div>
                    <div className="box">Wind</div>
                </div>

            </div>


        </>
    )
}

export default WeatherCard




//  https://api.openweathermap.org/data/2.5/weather?q=kanpur&appid=90c71378d132e1f47bdc5b17f613ef21