const express = require('express')
const app = express()
const messageRouter = require('./src/router/messageRouter')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./src/config/databaseConfig')

const PORT = 3001

app.use('/message', messageRouter)

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`)
})
