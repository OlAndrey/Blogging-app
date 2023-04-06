const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createPost } = require('../containers/postContainer')

const route = express.Router()

route.post('/add-post', checkAuth, createPost)

module.exports = route
