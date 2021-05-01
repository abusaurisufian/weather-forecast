import React, { Fragment } from 'react';

const detailedWeatherInfo=(props)=>{ 
    const detailInfo=props.details;
    let humidity=null;
    let airPressure=null;
    let seaLevel=null;
    let maxTemp=null;
    let minTemp=null;
    let windSpeed=null;
    let directions=null;
    if(detailInfo){
        humidity=detailInfo.main.humidity;
        airPressure=detailInfo.main.pressure;
        seaLevel=detailInfo.main.sea_level;
        maxTemp=detailInfo.main.temp_max;
        minTemp=detailInfo.main.temp_min;
        windSpeed=detailInfo.wind.speed;
        directions=detailInfo.wind.deg;
    }
    return( 
   <div style={{marginTop:'50px',textAlign:'center'}}>
      <div>{humidity}</div>
      <div>{airPressure}</div>
      <div>{seaLevel}</div>
      <div>{maxTemp}</div>
      <div>{minTemp}</div>
      <div>{windSpeed}</div>
      <div>{directions}</div>
   </div>
    )
}

export default detailedWeatherInfo;