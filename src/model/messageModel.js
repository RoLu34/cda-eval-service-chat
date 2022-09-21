const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({

    "content": String,
    "roomId": String,
    "username": String,
    "date": String

})

module.exports = mongoose.model('Message', messageSchema)