const fs = require('fs')

//fs.writeFileSync('new.txt','hello')
//fs.unlinkSync('new.txt')

console.log(__dirname)
console.log(__filename)

// fs.mkdirSync
// fs.rmdirSync
// fs.existsSync - for file and dir
// fs,fs.readdirSync

console.log('before')


fs.readFile('f1.txt', 'utf8', cb1);

function cb1(error, data) {
    if(error){
        console.log(error);
    }
    console.log(data)    
}

fs.readFile('f2.txt', 'utf8', cb2);

function cb2(error, data) {
    if(error){
        console.log(error)
    }
    console.log(data)
} 

console.log('after')