
const { OpenAI } = require('openai');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function getMessage(msg){
    messages = [];
    console.log("\n");
    console.log("Pertanyaan : \n"+msg.body);

    // const message = req.body.message;
    const message = msg.body;
  
    
    if(msg.id.fromMe == false){
        messages.push({
          role: "user",
          content: message,
        });
        const response = openai.chat.completions.create({
          model: "gpt-4",
          messages,
        });
    
        // console.log(response.choices);
        response.then((result) => {
          const phone = msg._data.id.remote;
          
          const message = "/ask "+result.choices[0].message.content;
          
          console.log("\n");
          console.log("Jawaban Open AI (Chat GPT 4) : \n"+ result.choices[0].message.content);
    
        
          // client.sendMessage(`${phone}`, message).then((response) => {
          //       if (response.id.fromMe) {
          //         console.log(`Message successfully sent to ${phone}`);
          //           // res.send({ status: 'success', message: `MediaMessage successfully sent to ${phone}` })
          //           // res.json({ status:'success', data : response })
          //       }
          //   });
        })
        .catch((err) => {
          console.log(err);
        });
    }else{
      console.log('ini dari saya')
    }

    
}


module.exports = { getMessage };