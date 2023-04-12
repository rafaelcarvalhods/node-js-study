const http = require('http');
const fs = require('fs');

http
  .createServer(function(req, res) {
    const fileStream = fs.createReadStream('./content/big.txt');
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  }
  )


  // Not the smartest way to send a big file over the wire
/*
http.createServer(function (req, res) {
  const text = fs.readFileSync('./content/big.txt', 'utf8')
  res.end(text)
}).listen(5000) */