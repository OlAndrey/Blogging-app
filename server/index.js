const express = require('express')
const { mongoose } = require('mongoose')

const PORT = process.env.PORT || 5500
const server = express()

// Server Setup
const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://OleynikAndrey01:9eglG96nfRima86G@cluster0.rgv4had.mongodb.net/?retryWrites=true&w=majority'
    )

    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
