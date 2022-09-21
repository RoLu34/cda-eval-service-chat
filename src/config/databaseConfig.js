const mongoose = require('mongoose')
const Message = require('../model/messageModel.js')

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yf65c.mongodb.net/cda-eval-instant-messaging?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})