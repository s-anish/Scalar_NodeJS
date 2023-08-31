const fs = require('fs')

fs.writeFileSync('new.txt','hello')
//fs.unlinkSync('new.txt')

console.log(__dirname)
console.log(__filename)

// fs.mkdirSync
// fs.rmdirSync
// fs.existsSync // for file and dir
// fs,fs.readdirSync