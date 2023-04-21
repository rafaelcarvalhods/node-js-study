// #3 - Node's native option
const { readFile, writeFile } = require('fs').promises;

const start = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    await writeFile('./content/write-file', "I'm rewriting this file!")
    console.log(first)
  } catch (error) {
    console.log(error)
  }
}

start()

/*_____________________________________*/

// #2 - Uses 'util' module to make readFile return a promise
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8');
//     await writeFilePromise('./content/write-file', "I'm rewriting this file!")
//     console.log(first)
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()

/*__________________________________*/

// #1 - Make getText return a promise
// const { readFile, writeFile } = require('fs')

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))