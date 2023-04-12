const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    Comment: {
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
