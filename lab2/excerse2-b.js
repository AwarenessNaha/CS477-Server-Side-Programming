const fs = require('fs');
const server18 = require('http').createServer();



server18.on('request',callBack18);

server.listen(8000);

function callBack18(request, response){
    fs.readFile('./situationAwareness.jpg', (err, data) => {
        if (err) throw err;
        response.end(data);
    });
}

