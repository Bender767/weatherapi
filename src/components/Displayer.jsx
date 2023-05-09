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
            <p>Longitude:</p>
            <p>Latitude: </p>
        </div>
        <div id='temp'>
            <p>Main Condition: </p>
            <p>Temp Min: {data.main.temp_min} °C</p>
            <p>Temp Max: {data.main.temp_max} °C</p> 
        </div>
        <div id='wind'>
            <p>Windspeed: </p>
            <p>Deg: </p>
        </div>
    </div>
  )
}
