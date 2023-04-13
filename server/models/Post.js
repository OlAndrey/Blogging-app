const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      default: ''
    },
    views: {
      type: Number,
      default: 0
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)
