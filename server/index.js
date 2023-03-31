const express = require('express')
const { mongoose } = require('mongoose')
const cors = require('cors')
const authRoute = require('./routes/auth')
const dotenv = require('dotenv')

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
server.use(express.json())
server.use(authRoute)

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
