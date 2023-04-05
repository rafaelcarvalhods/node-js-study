// "npm" - global command (comes with node)
// "npm --version" - shows npm version installed

// instal local dependency - use it in this particular project
// "npm i <packageName>"

// install global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
  // manual approach (create package.json in the root)
  // npm init (step by step)
  // npm init -y (everything default)

// include a package in '.gitignore' by putting the filename
  // example: '/node_modules'

// if anyone clones my project, just need to run 'npm install' and all the necessary dependencies are installed automatically
  // npm will check for dependencies tha we have in package.json

// instal a <package> as Dev dependency
  // 'npm i <packageName> -D' or 'npm i <packageName> --save-dev


const _ = require('lodash')

const items = [1, 2, [3, 4, [5, 6]]]
const newItems = _.flattenDeep(items)

console.log(newItems)