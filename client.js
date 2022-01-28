require('dotenv').config('')
const client = require ("twilio")(process.env.accountSid, process.env.authToken)

const express= require("express")
const app =express()

const axios = require('axios').default;

function sendTextMessage (body, to, from=`${process.env.senderPhone}`) {
    if (body.length>140) throw('Text must be under 140 characters')
    
    function createSms() {client.messages.create({
        body: body,
        to: to,
        from: from
    }).then(message =>console.log(message))
    .catch(error => console.log(error))}
    
    const result = Array.isArray(to);    
    if (result) {to.forEach(createSms)}
    else {createSms()}
}

async function sendSms (body, to, from) {
   await axios.post('/sendSms', (req,res, next) => {
        res.json({
            message: "SMS sent",
        })
        next()
        });
}
module.exports = sendSms;
module.exports = sendTextMessage;