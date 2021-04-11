import React  from 'react';
import Weather from './Weather/Weather';
import classes from './Weathers.module.css';
const weathers =(props)=>{
  
 
    return (
        <div className={classes.WeathersContainer}> 
           {props.weather.map((report)=>{
               //console.log(report)
               return <Weather key={report.id+1} todaysWeather={report}/>
           })}
       </div>
    )

}

export default weathers;