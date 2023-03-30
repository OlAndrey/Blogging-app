const mongoose = require('mongoose')

const user = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    posts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Users', user)
