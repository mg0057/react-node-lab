
const http = require('http');

const server = http.createServer((req, res) => {

     res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/api/info' && req.method === 'GET') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            info: 'React is communicating with Node.js'
        }));

    } else {

        res.writeHead(404);
        res.end('Not Found');

    }

});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
