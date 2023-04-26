const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')
const { cloudinaryConfig } = require('./utils/cloudinaryConfig')

const app = express()
dotenv.config()
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5500']
  })
)
const port = process.env.PORT || 3000

app.use('*', cloudinaryConfig)
app.use(express.json())
app.use(express.static('uploads'))
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)
app.use('/api/comment', commentRoute)

const server = http.createServer(app)

// Server Setup
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDB connected!')
    server.listen(port, () => {
      console.log(`Server started on port: ${port}`)
    })
  })
  .catch((err) => {
    console.log({ err })
    process.exit(1)
  })
