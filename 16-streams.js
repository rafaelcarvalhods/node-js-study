// Streams - read or write sequentially

// Read the file in chunks (64KB)

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8'})

// highWaterMark - control size
  // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 }) // default 64KB
  // const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
// last buffer - remainder

stream.on('data', (result) => {
  console.log(result)
})