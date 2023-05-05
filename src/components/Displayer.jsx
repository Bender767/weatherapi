import React from 'react'

export const Displayer = (props) => {

    const [data, setData] = props.payload
/*  JSON.stringify(props.payload, null, 2) */
     console.log(data)   
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


    
  return (
    <>
    <div>
        <p></p>
        <p>Place:{data.lon} </p>
        <p>Longitude: </p>
        <p>Latitude: </p>
    </div>
    <div>
        <p>Main Condition: </p>
        <p>Temp Min: </p>
        <p>Temp Max: </p>
    </div>
    <div>
        <p>Windspeed: </p>
        <p>Deg: </p>
    </div>
    </>
  )
}
