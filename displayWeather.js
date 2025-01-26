module.exports =  function displayWeather(value){
    const time = (timezone) => new Intl.DateTimeFormat('en-US', {'hour':'2-digit', 'minute':'2-digit'}).format(new Date(timezone))
    const information ={
        "temp":value.main,
        "feels_like": value.main,
        "temp_min":value.main.temp_min,
        "temp_max":value.main.temp_max,
        "description":value.weather[0].description,
        "pressure":value.main.pressure,
        "humidity":value.main.humidity,
        "visibility":value.visibility * 0.001,
        "wind_speed":value.wind.speed,
        "country":value.sys.country,
        "sunrise":time(value.sys.sunrise),
        "sunset":time(value.sys.sunset),
        "name":value.name,
        "timezone": (Math.floor(value.timezone / 3600)).toFixed(1)
    } 
    return res.send(information)
}