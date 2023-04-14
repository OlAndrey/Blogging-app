const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createComment, getAllPostComments } = require('../containers/commentContainer')

const route = express.Router()

route.get('/:id', getAllPostComments)
route.post('/:id', checkAuth, createComment)

module.exports = route
