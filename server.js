require('dotenv').config('')
const express= require("express")

const queues = require('./worker');
const sendSms = require('./client');

const app = express()
const port= 3001



app.get('/sendSms/:to/:body', (req,res, next) => {
    console.log(("Sent From: " + req.params.from))
    console.log(("Sent To: " + req.params.to))
    console.log(("Text is: " + req.params.body))
    queues(req.params)
    res.json({
        message: "SMS sent",
    })
    next()
});

app.use('/sendSms', (req,res, next) => {    
    queues(req.params)
    res.json({
        message: "SMS sent",
    })
    next()
    });

sendSms("Testing", process.env.myPhone)

app.listen(port, ()=> {
    console.log(`Listening at http://localhost:${port}`)
});


