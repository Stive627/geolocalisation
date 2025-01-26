const fetchUrl = require("./fetchUrl")

const consumeIP = (req, res) => {
    var ipAddress = req.ip
    var urllocation = `http://ip-api.com/json/${ipAddress}`
    var YOUR_ACCESS_KEY = 'e9e6d72748bba48c0342882ec1dd5da2'
    // var urlWeather = `http://api.openweathermap.org/data/2.5/weather?`+`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetchUrl(urllocation, (value) => res.status(200).send(value))
}
module.exports = consumeIP