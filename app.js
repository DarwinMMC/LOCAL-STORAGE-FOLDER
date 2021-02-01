const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const {middleware_cors} = require('./middleware/index')
const { Modifiers } = require('chalk')
const routes = require('./routes/routes')


const app = express()

//middlewars
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.all('/*',middleware_cors); 

//routes

app.use('/',routes)

app.use(express.static(path.join(__dirname,'public')))

module.exports = app
