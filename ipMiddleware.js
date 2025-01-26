const requestIp = require('request-ip')

const ipMiddleware = (req, res, next) =>{
    const clientIp = requestIp.getClientIp(req)
    req.ip = clientIp
    next()
}
module.exports = ipMiddleware