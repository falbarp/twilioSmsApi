const sendTextMessage = require('./client');

function queues (parmaters) {
class Queue {

    constructor() { this.q = []; }
    send( item )  { this.q.push( item ); }
    receive()     { 
        sendTextMessage(parmaters.body,parmaters.to)
        return this.q.shift(); }
  
  }

  const q1 = new Queue()
  q1.send(parmaters);
  console.log( q1.receive() );
  console.log(parmaters.to)
  console.log( q1.receive() );
}
module.exports= queues