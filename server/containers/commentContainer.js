const Comment = require('../models/Comment')
const Post = require('../models/Post')
const User = require('../models/User')

const createComment = async (req, res) => {
  try {
    const { postId, comment } = req.body
    const user = await User.findById(req.userId)

    if (!comment) res.status(500).json({ message: 'comment cannot be empty' })

    const newComment = new Comment({ authorName: user.fullName, comment })
    await newComment.save()

    try {
      await Post.findByIdAndUpdate(postId, {
        $push: { comments: newComment._id }
      })
    } catch (error) {
      console.error(error)
    }
    res.status(200).json(newComment)
  } catch (error) {
    res.status(500).json({ message: 'failed to create comment' })
  }
}

const getAllPostComments = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    const comments = []

    for (let index = post.comments.length - 1; index >= 0; index--) {
      const comment = await Comment.findById(post.comments[index])
      comments.push(comment)
    }
    res.status(200).json({ comments })
  } catch (error) {
    res.status(500).json({ message: 'failed to get comments' })
  }
}
module.exports = { createComment, getAllPostComments }
