const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createComment } = require('../containers/commentContainer')

const route = express.Router()

route.post('/:id', checkAuth, createComment)

module.exports = route
