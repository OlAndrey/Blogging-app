const express = require('express')
const { register, login, getMe } = require('../containers/authContainer')
const checkAuth = require('../utils/checkAuth')

const route = express.Router()

route.post('/api/registration', register)
route.post('/api/login', login)
route.get('/api/me', checkAuth, getMe)

module.exports = route
