const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createPost, getAllPosts, getMyPost, getPostById } = require('../containers/postContainer')

const route = express.Router()

route.post('/add-post', checkAuth, createPost)
route.get('/get-all-posts', getAllPosts)
route.get('/user/me', checkAuth, getMyPost)
route.get('/:id', getPostById)

module.exports = route
