import http from 'node:http'

const server = http.createServer((req, res) => {
    if(req.url == '/api/hello' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: "Hello, men. This is my server"}))

    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Native server runing! - URL: http://localhost:3000/api/hello")
});