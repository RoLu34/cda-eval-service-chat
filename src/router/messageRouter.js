const express = require('express')
const Message = require('../model/messageModel')
const router = express.Router();

router.get('/', (req, res) => {
    Message.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
})
  
router.get('/:roomId', (req, res) => {
    Message.find({roomId: req.params.roomId}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
})

router.post('/', (req, res) => {
    const message = new Message({
        content: req.body.content,
        roomId: req.body.roomId,
        username: req.body.username,
        date: req.body.date
    })
    message.save()
        
    res.end()
})

module.exports = router;