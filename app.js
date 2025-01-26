const express = require('express')
const ipMiddleware = require('./ipMiddleware')
const weather = require('./weather')
const forecast = require('./forecast')
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.enable('trust proxy')
app.get('/', ipMiddleware, weather)
app.get('/forecast', ipMiddleware, forecast)
app.listen(port, () => console.log(`The application is running at http://localhost:${port}`))