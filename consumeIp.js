const consumeIP = async (req, res) => {
    var ipAddress = req.ip
     const detail = await fetch(`http://ip-api.com/json/${ipAddress}`)
    if(detail.ok){
        return res.status(200).send(detail.json())
    }
}
module.exports = consumeIP