const express = require('express');

const router = express.Router();

const chatController = require('../services/chat/chatting');


router.get('/getLastChats', chatController.showLastChats);


module.exports = router;