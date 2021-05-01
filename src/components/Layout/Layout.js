import React, { Component } from 'react'

import Auxi from '../../hoc/Auxi/Auxi';
import Weathers from '../Weathers/Weathers';
import axios from 'axios';
import Toolbar from '../../UI/Toolbar/Toolbar';
import { BrowserRouter } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
class Layout extends Component{
    state={
        weatherReport:[],
        city:'Dhaka'
    }
    componentDidMount(){
        //console.log("insoide")
      
        let arr=[]
        axios.get('http://localhost:3004/weatherReport')
        .then(response =>{  
            const data={...response.data.map((e)=>arr.push(e))};
        })
        .then(res=>this.setState({weatherReport:arr}))
        
    }   
    show=()=>{console.log(this.state.weatherReport)}
    
    
    render(){ 
        let weatherOutput=null;
        //console.log(this.state.weatherReport.length)
        if(this.state.weatherReport.length>0){
            weatherOutput= <Weathers cityName={this.state.city} weather={this.state.weatherReport}/>
        }
        else{
            weatherOutput=<Spinner/>
        }
        
        ////console.log(this.state.weatherReport)


        return( 
        <BrowserRouter>
            <Auxi>
            
                <div>
                {weatherOutput}
                
                </div>
            </Auxi>
            
        </BrowserRouter>
        )
    }
}

export default Layout;