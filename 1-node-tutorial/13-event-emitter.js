// Event-Driven Programming

const EventEmitter = require('events');

const customEvent = new EventEmitter();

/* First we listen to the event, then we emit */

// listen to the event
customEvent.on('response', (username, id) => {
  console.log(`username: ${username} id: ${id}`)
})

// as many listen events as we want/need
customEvent.on('response', ()=> {
  console.log("another data received")
})

customEvent.emit('response', 'rafa', 21 )