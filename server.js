const finalHandler = require('finalhandler');
const serveStatic = require('serve-static');
const http = require('http');
const WebSocket = require('ws');

const socket = new WebSocket.Server({ port: 8081 });

socket.on('connection', function connection(clientWS) {
    clientWS.on('message', function incoming(message) {
        console.log(`received: ${message}`);
    });

    clientWS.send('HAY!');
});

const serve = serveStatic('./');

const server = http.createServer((req, res) => {
    const done = finalHandler(req, res);
    serve(req, res, done);
});

server.listen(8080);
