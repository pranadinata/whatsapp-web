const express = require('express');

const router = express.Router();

const chatController = require('../services/chat/chatting');


router.get('/getChats', chatController.getChats);




module.exports = router;