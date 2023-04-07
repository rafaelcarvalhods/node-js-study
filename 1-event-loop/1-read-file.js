const { readFile } = require('fs');

console.log('first task started')

// CHECK FILE PATH
readFile('./content/subfolder/test.txt', (err, result) => {
  if(err) {
    console.log(err);
    return
  }
  console.log(result);
  console.log('first task finished')
})

console.log('starting next task')