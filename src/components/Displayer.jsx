import React from 'react'
import  '../Styles/displayer.css'

export const Displayer = (props) => {

    const [data, setData] = props.payload
/*  JSON.stringify(props.payload, null, 2) */
/*      console.log(data)    */
/*  console.log(JSON.stringify(data)) */ 

/* const destruct = () => {
    data = ({
        coord: {lon, lat},
        weather: [{main}],
        main: {temp_min, temp_max},
        wind: {speed, deg},
        id: cityId
    })
}
 */

/* let lon
let lat
let temp_min
let temp_max
let speed
let deg
let cityId
let main */

let newObject = (JSON.stringify(data))
console.log(newObject)

/*  data = ({
        coord: {lon, lat},
        weather: [{main}],
        main: {temp_min, temp_max},
        wind: {speed, deg},
        id: cityId
    }) */


/*  const {
    coord: { lon, lat },
    weather: [{ id, main, description, icon }],
    base,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    visibility,
    wind: { speed, deg, gust },
    clouds: { all },
    dt,
    sys: { type, id: sys_id, country, sunrise, sunset },
    timezone,
    id: cityId,
    name,
    cod
  } = data;  */

 
/*   console.log(data.coord.lon) */
/*  JSON.parse(data) */
 let initVar = () => {
     let lon = data["coord"]["lon"]
     console.log(lon)
    return lon
 }


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
            <p>Temp Min:{/* {data.main.temp_min} */} </p>
            <p>Temp Max: </p>
        </div>
        <div id='wind'>
            <p>Windspeed: </p>
            <p>Deg: </p>
        </div>
    </div>
  )
}
