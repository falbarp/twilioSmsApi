const sendTextMessage = require('./client');

function queues (parmaters) {
class Queue {

    constructor() { this.q = []; }
    send( item )  { this.q.push( item ); }
    receive()     { 
        sendTextMessage(parmaters.body, parmaters.to, parmaters.from)
        return this.q.shift(); }
  
  }

  const q1 = new Queue()
  q1.send(parmaters);
}
module.exports= queues