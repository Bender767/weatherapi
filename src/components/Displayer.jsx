import React from 'react'
import  '../Styles/displayer.css'

export const Displayer = (props) => {

    const [data, setData] = props.payload
    const [coords] = props.coords



  return (
    <div id='weatherdisplay'>
        <div id='place'>
            <p></p>
            <p>Place: {data.name} </p>
            <p>Longitude: {data.coord.lon}</p>
            <p>Latitude: {data.coord.lat}</p>
        </div>
        <div id='temp'>
            <p>Current Temp: {data.main.temp} °C</p>
            <p>Temp Min: {data.main.temp_min} °C</p>
            <p>Temp Max: {data.main.temp_max} °C</p> 
        </div>
        <div id='wind'>
            <p>Windspeed: {data.wind.speed}</p>
            <p>Direction: {data.wind.deg}°</p>
        </div>
    </div>
  )
}
