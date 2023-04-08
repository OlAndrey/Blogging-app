const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createPost, getAllPosts } = require('../containers/postContainer')

const route = express.Router()

route.post('/add-post', checkAuth, createPost)
route.get('/get-all-posts', getAllPosts)

module.exports = route
