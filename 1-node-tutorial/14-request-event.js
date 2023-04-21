const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end("Hi!")
// })

//Using Event Emitter API
const server = http.createServer(); // emits request events

// subscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
  res.end('Hi!')
})

server.listen(5000)