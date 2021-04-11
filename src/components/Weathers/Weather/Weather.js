import React from 'react'
import classes from './Weather.module.css';
const weather=(props)=>( 
    <div className={classes.WeatherContainer} >
        <p>
        {props.todaysWeather.day}
        </p>
        <div>
         <span>fahrenheit : </span> {props.todaysWeather.tempInF}
        </div>
        <div>
        <span>celsius : </span> {props.todaysWeather.tempInC}
        </div>
        <div>
        <span>Forecast : </span>  {props.todaysWeather.forecast}
        </div>
    </div>
    );

/* 
"id":"2",
            "day":"Tuesday",
            "tempInF":"85",
            "tempInC":"68",
            "forecast":"dizzy"
*/
export default weather;