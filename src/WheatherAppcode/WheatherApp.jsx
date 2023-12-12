import React from 'react'
import './wheather.css'
import bkimg from '../WheatherAppcode/bkimg.jpg'

const WheatherApp = () => {

  let api_key="580bcb288cd2c6ddebd3da159abed877";

  const search = async () =>{

    const element =document.getElementsByClassName("searchcity")
    if(element[0].value===""){
    return 0;
    }

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response =  await  fetch(url);
    let data =  await  response.json();
    
    const humidity=document.getElementsByClassName("humidity-percentage")
const wind =document.getElementsByClassName("wind")
const temprature =document.getElementsByClassName("wheather-temp")
const location =document.getElementsByClassName("wheather-location")

humidity[0].innerHTML = data.main.humidity+"%";
wind[0].innerHTML = Math.floor( data.wind.speed)+"km/h";
temprature[0].innerHTML = Math.floor (data.main.temp)+"°c";
location[0].innerHTML = data.name;

  }


  return (
    <body>

<div className="app-body">

     <div className="container">
          <div className='search'>
            <input type="text" autoFocus autoCapitalize autoCorrect placeholder='Search City' className="searchcity" />
        </div>
        <div className="searchicon"  onClick={()=>{search()}}> <i class="fa-solid fa-magnifying-glass"></i></div>
</div>

<div className="cloud-temp">
<div className="cloud">
<i class="fa-solid fa-cloud-sun-rain"></i>
</div>
<div className="wheather-temp">.....</div>
<div className="wheather-location">Search City</div>
</div>

<div className="container-two">

<div className="wind-container">
<div className="wind-icon"><i class="fa-solid fa-wind"></i></div>
  <div className="wind">18km/h</div>
  <div className="wind-speed">Wind Speed</div>
</div>

<div className="humidity">
  <div className="humdity-icon"><i class="fa-solid fa-water"></i></div>
  <div className="humidity-percentage">64%</div>
  <div className="humidity-text">Humidity</div>
</div>

</div>

</div>
    </body>
    
  )
}

export default WheatherApp