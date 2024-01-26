// const router = require('express').Router();

const { Client } = require("whatsapp-web.js");


async function getChats(req, res){
    client.getChats().then((chats) => {
        res.send({ status: "success", message: chats});
    }).catch(() => {
        res.send({ status: "error",message: "getchatserror" })
    })
}


module.exports = { getChats };