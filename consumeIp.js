const fetchUrl = require("./fetchUrl")

const consumeIP = (req, res) => {
    var ipAddress = req.ip
    var urllocation = `http://ip-api.com/json/${ipAddress}`
    var YOUR_ACCESS_KEY = 'e9e6d72748bba48c0342882ec1dd5da2'
    fetchUrl(urllocation, (value) => {
        var urlWeather = `http://api.openweathermap.org/data/2.5/weather?`+`lat=${value.latitude}&lon=${value.longitude}&appid=${YOUR_ACCESS_KEY}`
        fetchUrl(urlWeather, (value) => res.status(200).send(value))
    })
}
module.exports = consumeIP