const http = require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/') {
      res.end('Welcome to my home page!')
    }

    if(req.url === '/about') {
      res.end(`My name is Rafael. I'm a backend developer!`)
    }

    if(req.url === '/error') {
      res.end(
        `<h1>Ooops!</h1>
        <p>Something went wrong!!!</p>
        <a href='/'>Back to Home Page</a>`)
    }
})

server.listen(3000)