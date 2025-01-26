const consumeIP = (req, res) => {
    console.log(req.ip)
    return res.status(200).send(req.ip)
}

module.exports = consumeIP