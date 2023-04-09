const EventEmitter = require('events');

const customEvent = new EventEmitter()

customEvent.on("response", () => {
  console.log("data received")
})

customEvent.on("response", (username, id) => {
  console.log(`username: ${username} id: ${id}`)
})

customEvent.emit("response", "rafa", 21)