const express = require('express')
const checkAuth = require('../utils/checkAuth')
const {
  createPost,
  getAllPosts,
  getMyPost,
  getPostById,
  updatePost,
  removePost
} = require('../containers/postContainer')
const { multerUploads } = require('../utils/checkFiles')

const route = express.Router()

route.post('/add-post', checkAuth, multerUploads, createPost)
route.get('/get-all-posts', getAllPosts)
route.get('/user/me', checkAuth, getMyPost)
route.get('/:id', getPostById)
route.put('/:id', checkAuth, multerUploads, updatePost)
route.delete('/:id', checkAuth, removePost)

module.exports = route
