//custom module
const logger = require("./logger")

//builtin module
const os = require('os')
const fs = require('fs')
const path = require('path')
/*function sayHelo() {
    console.log('Hello');
}

logger.logfunction("WELCOME TO NODE JS")
logger.saySomethingfunction();
*/

/*const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(totalMemory, freeMemory)
*/

var filename = path.parse(__filename)

console.log(filename);


