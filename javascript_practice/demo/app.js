var http = require('http')

const server = http.createServer((req, res) => {
    res.write('welcome to node js')
    res.end
});

server.on('connection', socket => {
    console.log('new connection aaya hai');

})
server.listen(5500)
console.log('listening on port 3000');


