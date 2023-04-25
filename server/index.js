const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const fileUpload = require('express-fileupload')
// const dotenv = require('dotenv')
// const cors = require('cors')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')

const app = express()
// dotenv.config()

const port = process.env.PORT || 3000
// const user = process.env.DB_USER
// const password = process.env.DB_PASSWORD

// app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }))
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))
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
