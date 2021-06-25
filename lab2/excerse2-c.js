const fs = require('fs');
const server = require('http').createServer();

server.on('request', callBack28);

server.listen(9000);

function callBack28(req, res){
    fs.createReadStream("./situationAwareness.jpg").pipe(res);
}