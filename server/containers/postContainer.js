const Post = require('../models/Post')
const User = require('../models/User')
const { dataUri } = require('../utils/checkFiles')
const { uploader } = require('../utils/cloudinaryConfig')

const createPost = async (req, res) => {
  try {
    const { title, text } = req.body
    const user = await User.findById(req.userId)

    if (req.file) {
      const file = dataUri(req).content
      const result = await uploader.upload(file)
      const imgUrl = result.url

      const newPostWithImage = new Post({
        fullName: user.fullName,
        title,
        text,
        imgUrl,
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

const getMyPost = async (req, res) => {
  const { page = 1, limit = 10 } = req.query

  try {
    const user = await User.findById(req.userId)
    const count = user.posts.length
    const listPost = user.posts.slice((page - 1) * limit, page * limit)

    const list = await Promise.all(
      listPost.map((post) => {
        return Post.findById(post._id)
      })
    )

    res.json({
      list,
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

const updatePost = async (req, res) => {
  const { id } = req.params
  try {
    const { title, text } = req.body
    const post = await Post.findById(id)

    if (req.file) {
      const file = dataUri(req).content
      const result = await uploader.upload(file)
      const imgUrl = result.url

      post.imgUrl = imgUrl || ''
    }

    post.title = title
    post.text = text

    await post.save()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: 'failed to update post' })
  }
}

const removePost = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findByIdAndRemove(id)

    if (!post) return res.status(500).json({ message: 'post not found!' })

    await User.findByIdAndUpdate(req.userId, {
      $pull: { posts: id }
    })

    return res.json({
      message: 'post has been deleted'
    })
  } catch (err) {
    res.status(500).json({ message: 'failed to remove post' })
  }
}
module.exports = {
  createPost,
  getAllPosts,
  getMyPost,
  getPostById,
  updatePost,
  removePost
}
