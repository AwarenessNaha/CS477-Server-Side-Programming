/**
 * 2. Create a web server that's going to send a response of big image (bigger then 3MB) to 
 * any client that sends a request to your specified server:port. Use the best way for 
 * performance. (Try to solve this in many different ways and inspect the loading time 
 * in the browser and send many requests to see the performance differences)
 */

const http = require('http');
const fs = require('fs');

const server18 = http.createServer();
server18.on('request', callBack);
server18.listen(8080);

function callBack(req, res) {
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    let photo = fs.readFileSync('./.situationAwareness.jpg');
    res.end(photo, "binary");
}