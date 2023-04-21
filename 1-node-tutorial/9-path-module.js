const path = require('path')

// returns the default separator used in this enviroment
console.log(path.sep)

// normalize a whole path with the given arguments
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// basename
const base = path.basename(filePath)
console.log(base)

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
console.log(__dirname)