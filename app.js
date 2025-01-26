const express = require('express')
const ipMiddleware = require('./ipMiddleware')
const consumeIP = require('./consumeIp')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.enable('trust proxy')
app.get('/', ipMiddleware, consumeIP)
app.listen(port, () => console.log(`The application is running at http://localhost:${port}`))