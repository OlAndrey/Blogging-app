const path = require('path')
const Post = require('../models/Post')
const User = require('../models/User')

const createPost = async (req, res) => {
  try {
    const { title, text } = req.body
    const user = await User.findById(req.userId)

    if (req.files) {
      const fileName = Date.now().toString() + req.files.image.name
      req.files.image.mv(path.join(__dirname, '..', 'uploads', fileName))

      const newPostWithImage = new Post({
        fullName: user.fullName,
        title,
        text,
        imgUrl: fileName,
        author: req.userId
      })

      await newPostWithImage.save()
      await User.findByIdAndUpdate(req.userId, {
        $push: { posts: newPostWithImage }
      })

      return res.status(200).json(newPostWithImage)
    }

    const newPostWithoutImage = new Post({
      fullName: user.fullName,
      title,
      text,
      author: req.userId
    })

    await newPostWithoutImage.save()
    await User.findByIdAndUpdate(req.userId, {
      $push: { posts: newPostWithoutImage }
    })

    return res.status(200).json(newPostWithoutImage)
  } catch (e) {
    res.status(500).json({ message: 'failed to add post' })
  }
}

const getAllPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query

  try {
    const posts = await Post.find()
      .limit(limit * 1)
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .exec()

    const count = await Post.countDocuments()

    res.json({
      posts,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    })
  } catch (err) {
    res.status(500).json({ message: 'failed to get posts' })
  }
}

const getPostById = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findByIdAndUpdate(id, {
      $inc: { views: 1 }
    })

    res.json({
      post
    })
  } catch (err) {
    res.status(500).json({ message: 'failed to get post' })
  }
}

module.exports = { createPost, getAllPosts, getPostById }
