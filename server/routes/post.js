const express = require('express')
const checkAuth = require('../utils/checkAuth')
const { createPost, getAllPosts, getMyPost, getPostById, removePost } = require('../containers/postContainer')

const route = express.Router()

route.post('/add-post', checkAuth, createPost)
route.get('/get-all-posts', getAllPosts)
route.get('/user/me', checkAuth, getMyPost)
route.get('/:id', getPostById)
route.delete('/:id', checkAuth, removePost)

module.exports = route
