// Event-Driven Programming

const EventEmitter = require('events');

const customEvent = new EventEmitter();

// listen to the event
customEvent.on('response', () => {
  console.log('data received')
})

// as many listen events as we want/need
customEvent.on('response', ()=> {
  console.log("another data received")
})

customEvent.emit('response')