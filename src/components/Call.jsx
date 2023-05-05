import React from 'react'
import { useState } from 'react'
import {TK} from "./TK.js"


/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=TK */


export const Call = () => {
  
  const [data, setData] = useState([]);
  const [lonValue, setlonValue] = useState("")

  let inputLat = 47.4867
  let inputLon = 8.2109

  let callString = 'https://api.openweathermap.org/data/2.5/weather?lat=' + inputLat + '&lon=' + inputLon + '&appid=' + TK

  const updateLon = (e) => {
    inputLon = e.currentTarget.value
    console.log(inputLon)
  }

  const updateLat = (e) =>{
    inputLat = e.currentTarget.value
    console.log(inputLat)
  }

  const apiGet = () => {

  fetch(callString)
  .then(response => response.json())
  .then((json)=> {
    console.log(json);
    setData(json);
  })
  }

  
  /*
  .catch(error => {
    console.error(error);
  });
   */




  
  return (
    <div>
      <div>
        <input type="text" placeholder='Lon' onChange={updateLon}/>
        <input type="text" placeholder='Lat'onChange={updateLat}/>
      </div>
      <button onClick={apiGet}>Fetch Weather Data</button>
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <br />
    </div>
  );
}
