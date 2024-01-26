require('dotenv').config();

//deklarasi class constanta 
const express = require("express");

const { Client, LocalAuth } = require("whatsapp-web.js");

const qrcode = require('qrcode-terminal');
const fs = require("fs");
const GlobalFunction = require("./services/global/message");




//Express JS to running Server API
const app = express();
const port = process.env.PORT;



global.client = new Client({
    restartOnAuthFail: true,
    authStrategy: new LocalAuth(),
    puppeteer: {headless: true, args: [ '--no-sandbox' ], }
});




//whatsapp Client
client.on("qr", (qr) => {
    console.log("QR Client");
    fs.writeFileSync("./services/auth/last.qr", qr);
    qrcode.generate(qr, {small: true});
});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.on("disconnected", () => {
    console.log("disconnected");
});

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.on("message", async (msg) => {
    GlobalFunction.getMessage(msg);
});

client.initialize();




const chatRouter = require('./routes/chat');


app.use('/chat', chatRouter);


app.listen(port, ()=> {
    console.log("Server Running Live on Port : " + port);
    
});