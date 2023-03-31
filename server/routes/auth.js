const express = require('express')
const { register, login } = require('../containers/authContainer')

const route = express.Router()

route.post('/api/registration', register)
route.post('/api/login', login)

module.exports = route
