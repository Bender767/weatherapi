import React from 'react'
import { useState, useRef } from 'react'
import {TK} from "./TK.js"

import  '../Styles/call.css'

/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=TK */


export const Call = (props) => {
  
  const [data, setData] = props.payload
  const [coords, setCoords] = props.coords

  const latInput = useRef()
  const lonInput = useRef()

  const [errMessage, setErrMessage] = useState(null)

  const updateCoords = (e, n) => {
    let newCoords = coords
    coords[n] = e.currentTarget.value
    setCoords(newCoords)
  }

  const apiGet = () => {
    setErrMessage(null)

    let [lat, lon] = coords

    if (lat === "" || lon === "") {
      setErrMessage('Fields cannot be blank')
      return
    }

    lat = Number(coords[0])
    lon = Number(coords[1])

    if (isNaN(lat) || isNaN(lon)) {
      setErrMessage('Invalid coordinates')
      return
    }

    let callString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + coords[0] + '&lon=' + coords[1] + '&appid=' + TK + '&units=metric'

    fetch(callString)
      .then(response => response.json())
      .then((json)=> {
        console.log(json);
        if (json.cod == 200){
          setData(json);
          latInput.current.value = ""
          lonInput.current.value = ""
          latInput.current.focus()
        } else {
          setErrMessage(json.message)
        }
      })
      .catch((err) => {
        console.log('catch block');
        console.log(err);
        setErrMessage(err.message)
      })
  }

  
  return (
    <div id='inputweather'>
      <div className='inputfields'>
        <input type="text" placeholder='Lat' onChange={(e)=>{updateCoords(e, 0)}} ref={latInput}/>
        <input type="text" placeholder='Lon' onChange={(e)=>{updateCoords(e, 1)}} ref={lonInput}/>
      <button className='button' onClick={apiGet}>Fetch Weather Data</button>
      </div> 
      {errMessage && (
        <div className="errMessage">{errMessage}</div>
      )}
    </div>
  );
}


