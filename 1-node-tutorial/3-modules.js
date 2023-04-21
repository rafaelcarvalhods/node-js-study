// CommonJS, every file is module (by default)
// Module - Encapsulated Code (share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

//When I require a module I actually invoke it
require('./7-mind-grenade')

console.log(data)

// export default (ES6)
// sayHi("Rafa")
// sayHi(names.marcia)
// sayHi(names.esther)