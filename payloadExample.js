let payload = {
    "coord": {
        "lon": 8.2109,
        "lat": 47.4867
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 292.1,
        "feels_like": 291.7,
        "temp_min": 290.38,
        "temp_max": 293.87,
        "pressure": 972,
        "humidity": 63
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.05,
        "deg": 240,
        "gust": 1.65
    },
    "clouds": {
        "all": 100
    },
    "dt": 1683274498,
    "sys": {
        "type": 2,
        "id": 2080253,
        "country": "CH",
        "sunrise": 1683259483,
        "sunset": 1683312177
    },
    "timezone": 7200,
    "id": 7285348,
    "name": "Brugg",
    "cod": 200
}


/* 
let lon
let lat
let main
let temp_min
let temp_max
let speed
let deg
let cityId

[lon, lat, main, temp_min, temp_max, speed, deg, cityId] = 

function printValues(lon, lat, main, temp_min, temp_max, speed, deg, cityId){
   
  let desData = [lon, lat, main, temp_min, temp_max, speed, deg, cityId]

  return desData

      const{
      coord: {lon, lat},
      weather: [{main}],
      main: {temp_min, temp_max},
      wind: {speed, deg},
      id: cityId
    } = data;

    
} */