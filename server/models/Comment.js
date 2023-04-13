const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
