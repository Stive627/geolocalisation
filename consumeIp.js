const consumeIP = (req, res) => {
    var ipAddress = req.ip
    fetch(`http://ip-api.com/json/${ipAddress}`)
    .then((value) =>value.json())
    .then((value) => res.status(200).send(value))
    .catch((err) => res.status(400).send(`An error occured\n${err}`))
}
module.exports = consumeIP