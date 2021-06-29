/**
 * 
1, Create a http or https server which is listen to 3000 port.
2. The home page “/” which displays an html page with one input to enter any text message
3. User enter some message, then click “Submit” button
4. The user’s inputs are stored in a local file on the server side.
5. User will be redirect to home page after saving successfully.
 */

//const http = require('http');
//const fs = require('fs');

const server = require('https').createServer();

server.on('request', (req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/messsage" method="POST">Enter Message: <input name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end(); // "retrun" here exits the function execution, otherwise continue.
    }
    else if (url === '/messsage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk); // body now is a Buffer 
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // to concat the buffer and transfer it to string
            console.log(parsedBody);
            fs.writeFileSync('message.txt', parsedBody.split('=')[1]);//
        });

        res.statusCode = 302; // status code for redirecting  
        res.setHeader("Location", "/"); // 
        res.end();
    }
});

server.listen(3344);