// const router = require('express').Router();

const { Client } = require("whatsapp-web.js");

module.exports.showLastChats = async (req, res) => {
	const getLastChats = client.getChats().then((chats) => {
        if(chats){           
            // res.send({ message: chats[0] });
            return chats[0];
        }
    })
    .catch(() => {
        res.send({ status: "error",message: "getchatserror" })
    })

    getLastChats.then((value)=>{
        res.send(value)
        // res.send(value.isGroup)
        

        // console.log(value)
        // console.log(value.lastMessage._data.from.user)   
        // Chat.create({
        //     from : value.lastMessage._data.from.user,
        //     to : value.lastMessage._data.to.user,
        //     type : value.lastMessage._data.mimetype,
        //     content: value.lastMessage._data.body,
        //     whatsapp_chat_id : value.lastMessage._data.id.id, 
        //     whatsapp_from_name : value.lastMessage._data.notifyName,
        //     whatsapp_send_timestamp : value.timestamp,
        //     openai_embedding_id: 1,
        //     has_answer: false,
        // });
    });
}