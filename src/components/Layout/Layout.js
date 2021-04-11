import React, { Component } from 'react'

import Auxi from '../../hoc/Auxi/Auxi';
import Weathers from '../Weathers/Weathers';
import axios from 'axios';
class Layout extends Component{
    state={
        weatherReport:[]
    } 

    componentDidMount(){

        const options = {
          method: 'GET',
          url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
          params: {q: 'san francisco,us'},
          headers: {
            'x-rapidapi-key': '1005e10206mshc11ca8fc69779aep18c3fajsn0b00796f2456',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
          }
        };
        
        axios.request(options)
        .then(function (response) {
            const weatherList=response.data.list;
            let shortListed=[];
            for(let i=3;i<weatherList.length;i+=8){
              shortListed.push(weatherList[i])
            }
            return shortListed;
           /*  console.log(shortListed) */
        }).catch(function (error) {
            console.error(error);
        });
         
    }
    render(){ 
        //console.log(this.state.weatherReport)
        return( 
        <Auxi>
        <p>Toolbar</p>
        <p>SearchBar</p>
        <div>
            <Weathers weather={this.state.weatherReport}/>
        </div>
        <div>
            {this.props.children}
        </div>
    </Auxi>
        )
    }
}

export default Layout;