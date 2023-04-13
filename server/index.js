const express = require('express')
const fileUpload = require('express-fileupload')
const { mongoose } = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')

const server = express()
dotenv.config()

const PORT = process.env.PORT || 5500
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

server.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:1234']
  })
)

// server.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
server.use(fileUpload())
server.use(express.json())
server.use(express.static('uploads'))
server.use('/api/auth', authRoute)
server.use('/api/post', postRoute)
server.use('/api/comment', commentRoute)

// Server Setup
const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@cluster0.rgv4had.mongodb.net/?retryWrites=true&w=majority`
    )

    server.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
