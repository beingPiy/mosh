
const os = require('os') ;

var totalMemory = os.totalmem()
var freeMemory = os.freemem() 

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

console.log(freeMemory*100/totalMemory)