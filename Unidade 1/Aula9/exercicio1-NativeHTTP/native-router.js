import http from 'node:http'

const server = http.createServer((req, res) => {
    if(req.url == '/health' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "System is healthy"}))
    }
    else if(req.url == '/admin' && req.method === 'GET') {
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end("Access Denied")
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Native Router Server - URL: http://localhost:3000")
})