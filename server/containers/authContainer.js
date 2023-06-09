const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const error = (req, res) => {
  res.status(500).json({
    message: 'Authorization error'
  })
}

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body
    const fullName = firstName + ' ' + lastName

    const salt = 4
    const hash = await bcrypt.hash(password, salt)
    const newUser = new User({ fullName, email, password: hash })
    newUser
      .save()
      .then((user) => res.status(200).json(user))
      .catch((e) =>
        res.status(406).json({
          error: e,
          message: 'The email address is already in use by another account'
        })
      )
  } catch (e) {
    error(req, res)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res
        .status(406)
        .json({ message: 'Email or password is incorrect!!!' })
    }

    const isPasswordCorrect = bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(406).json({
        message: 'Email or password is incorrect!!!'
      })
    }

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.status(200).json({ token, user })
  } catch (e) {
    error(req, res)
  }
}

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      return res.status(406).json({
        message: 'User not found!'
      })
    }

    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.status(200).json({ token, user })
  } catch (error) {
    res.status(406).json({ message: 'No access' })
  }
}

module.exports = { register, login, getMe }
