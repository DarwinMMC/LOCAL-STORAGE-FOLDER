const express = require('express')
const routes = express.Router()
const files = require('../api/file/route')


routes.use('/files',files)


module.exports = routes