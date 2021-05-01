import React, { Fragment }  from 'react';
import { BrowserRouter,Link, Route } from 'react-router-dom';
import DetailedWeatherInfo from '../DetailedWeatherInfo/DetailedWeatherInfo';
import Weather from './Weather/Weather';
import classes from './Weathers.module.css';
const weathers =(props)=>{
  const weatherdata=props.weather;

  let report=null;
  if(weatherdata){
      report=<div className={classes.WeathersContainer}> {weatherdata.map((r)=>{
          ////console.log(r)
          return (<Fragment>
            <Link to={`/:${r.dt}`}>
            <Weather  id={r.dt}  key={r.dt+1} todaysWeather={r}/>
            </Link>
            </Fragment>)
        })}</div>
        
        
    }
    
    return (
        <Fragment>
        <div>
        <h2 className={classes.CenterCity}> {props.cityName}</h2>
        <div>{report}</div>
        </div>
        <Route  path={`/:${weatherdata.dt}`} render={({match})=>{ 
          
             let weatherDetails=null;
                weatherDetails={...weatherdata.find((e)=>{
                    if(":"+e.dt === match.url.replace("/","")){
                       return e;
                    }
                })}
                //console.log(weatherDetails)
           return <DetailedWeatherInfo details={weatherDetails}/>
        }} />
        </Fragment>
    )

}

export default weathers;