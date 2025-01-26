const fetchUrl = require("./fetchUrl")
const time = (timezone) => new Intl.DateTimeFormat('en-US', {'hour':'2-digit', 'minute':'2-digit'}).format(new Date(timezone))
const consumeIP = (req, res) => {
    var ipAddress = req.ip
    var urllocation = `http://ip-api.com/json/${ipAddress}`
    var YOUR_ACCESS_KEY = 'e9e6d72748bba48c0342882ec1dd5da2'
    fetchUrl(urllocation, (value) => {
        var urlWeather = `http://api.openweathermap.org/data/2.5/weather?`+`lat=${value.lat}&lon=${value.lon}&appid=${YOUR_ACCESS_KEY}`
        fetchUrl(urlWeather,(val) => {
            return res.status(200).send({...val.main, ...val.sys, "timezone":val.timezone, "name":val.name})
        })
    })
}
module.exports = consumeIP