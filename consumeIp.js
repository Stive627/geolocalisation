const fetchUrl = require("./fetchUrl")
const time = (timezone) => new Intl.DateTimeFormat('en-US', {'hour':'2-digit', 'minute':'2-digit'}).format(new Date(timezone))
const consumeIP = (req, res) => {
    var ipAddress = req.ip
    var urllocation = `http://ip-api.com/json/${ipAddress}`
    var YOUR_ACCESS_KEY = 'e9e6d72748bba48c0342882ec1dd5da2'
    fetchUrl(urllocation, (value) => {
        var urlWeather = `http://api.openweathermap.org/data/2.5/weather?`+`lat=${value.lat}&lon=${value.lon}&appid=${YOUR_ACCESS_KEY}`
        fetchUrl(urlWeather,(val) => {
            try {
                // const information = {
                //     "temp":val.main.temp,
                //     "feels_like": val.main.temp_max,
                //     "temp_min":val.main.temp_min,
                //     "temp_max":val.main.temp_max,
                //     "description":val.weather[0].description,
                //     "pressure":val.main.pressure,
                //     "humidity":val.main.humidity,
                //     "visibility":val.visibility * 0.001,
                //     "wind_speed":val.wind.speed,
                //     "country":val.sys.country,
                //     "sunrise":time(val.sys.sunrise),
                //     "sunset":time(val.sys.sunset),
                //     "name":val.name,
                //     "timezone": (Math.floor(val.timezone / 3600)).toFixed(1)
                // } 
            return res.status(200).send(val.main.temp)
            } catch (error) {
                res.status(400).send(error.response)
                console.log(error.response)
            }
        })
    })
}
module.exports = consumeIP