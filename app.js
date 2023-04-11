// Streams - read or write sequentially

// Read the file in chunks (64KB)

const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})