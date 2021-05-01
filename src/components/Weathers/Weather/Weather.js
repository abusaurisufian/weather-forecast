import React from 'react'
import { BrowserRouter,Link, Route } from 'react-router-dom';

import classes from './Weather.module.css';
const weather=(props)=>{ 
    //console.log(props)
    let weatherData=null;
    weatherData= props.todaysWeather;
    let date=null; 
    let tempInK=null;
    let tempInF=null;
    let tempInC=null;
    let description=null;
    if(weatherData){
        date=weatherData.dt_txt.split(" ");
        tempInK=weatherData.main.temp
        tempInC=tempInK-273.15;
        tempInF=(tempInC*1.8)+32;
        description=weatherData.weather.description
    }
    
    return ( 
        <div>
            <div>
            {date[0]}
            </div>
            <div>
            {tempInC.toFixed(2)}
            </div>
            <div>{tempInF.toFixed(2)}</div>
            <div>{description}</div>
        </div>
  
    )
};

/* 
"id":"2",
            "day":"Tuesday",
            "tempInF":"85",
            "tempInC":"68",
            "forecast":"dizzy"
*/
export default weather;