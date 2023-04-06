const path = require('path')
const Post = require('../models/Post')
const User = require('../models/User')

const createPost = async (req, res) => {
  try {
    const { title, text } = req.body
    const user = await User.findById(req.userId)

    if (req.files) {
      const fileName = Date.now().toString() + req.files.file.name
      req.files.file.mv(path.join(__dirname, '..', 'uploads', fileName))

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

module.exports = { createPost }
